const { router, telegram, text } = require("bottender/router");
const isUrl = require("is-url");
const { customSearch, imageSearch } = require("./google");

async function search(query) {
  return await imageSearch(query);
}

function isImage(text) {
  return /\.(jpg|png|bmp|gif)$/i.test(text);
}

function isSo(text) {
  return /^很/.test(text);
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

async function reply(context) {
  const text = context.event.text;
  const queries = text
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => isImage(s) && !isUrl(s) && !isSo(s));
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

module.exports = async function App(context) {
  return router([text(/\.(jpg|png|bmp|gif)$/i, reply)]);
};
