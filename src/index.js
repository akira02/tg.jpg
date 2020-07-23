const { router, telegram, text } = require("bottender/router");
const isUrl = require("is-url");
const { customSearch, imageSearch } = require("./google");

async function search(query) {
  try {
    return await customSearch(query);
  } catch (e) {
    return await imageSearch(query);
  }
}

function isImage(text) {
  return /\.(jpg|png|bmp|gif)$/.test(text);
}

async function reply(context) {
  const text = context.event.text;
  const queries = text
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => isImage(s) && !isUrl(s));
  queries.forEach(async (query) => {
    try {
      const link = await search(query);
      if (query.endsWith(".gif")) {
        await context.sendDocument(link);
      } else {
        await context.sendPhoto(link);
      }
    } catch (err) {
      console.error(err);
    }
  });
}

module.exports = async function App(context) {
  return router([
    text(/\.(jpg|png|bmp|gif)$/i, reply),
    telegram.any(DefaultAction),
  ]);
};
