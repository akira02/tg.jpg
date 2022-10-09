const { router, telegram, text } = require("bottender/router");
const isUrl = require("is-url");
const { customSearch, imageSearch } = require("./google");

async function search(query) {
  return await imageSearch(query);
}

function isImage(text) {
  return /\.(jpg|png|bmp|gif)$/i.test(text);
}

async function tryEach(items, callback) {
  const errors = [];
  for (const item of items) {
    try {
      return await callback(item);
    } catch (error) {
      errors.push(error);
    }
  }
  const error = new Error("All Promises rejected");
  error.errors = errors;
  throw error;
}

async function replyImg(context) {
  const text = context.event.text;
  const queries = text
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => isImage(s) && !isUrl(s));
  queries.forEach(async (query) => {
    try {
      const links = await search(query);
      await tryEach(links, async (link) => {
        if (query.endsWith(".gif")) {
          await context.sendDocument(link);
        } else {
          await context.sendPhoto(link);
        }
      });
    } catch (err) {
      console.error(err);
    }
  });
}

const TWITTER_URL =
  /https?:\/\/twitter\.com\/(?:#!\/)?(\w+)\/status(es)?\/(\d+)/gim;

async function expandTwitter(context) {
  let link = context.event.text.match(TWITTER_URL);
  let expandedLink = link.replace("twitter.com", "vxtwitter.com");
  context.sendMessage(expandedLink);
}

module.exports = async function App() {
  return router([
    text(/\.(jpg|png|bmp|gif)$/i, replyImg),
    text(TWITTER_URL, expandTwitter),
  ]);
};
