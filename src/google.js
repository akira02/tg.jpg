if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
const fetch = require('node-fetch')
const qs = require('querystring')
const entities = require('entities')

const config = process.env

async function customSearch(query) {
  if (config.cse_key == null) {
    throw 'Google API key is not configured correctly.'
  }

  const endpoint = 'https://www.googleapis.com/customsearch/v1'

  const params = {
    q: query,
    fileType: query.endsWith('.gif') ? 'gif' : undefined,

    hl: 'zh-TW',
    num: 1,
    searchType: 'image',

    key: config.cse_key,
    cx: config.cse_cx,

    ...config.cse_params,
  }

  const res = await fetch(endpoint + '?' + qs.stringify(params))
  const data = await res.json()
  return data.items.map((item) => item.link)
}

async function imageSearch(query) {
  const endpoint = 'https://www.google.com/search'

  const params = {
    q: query,
    tbs: query.endsWith('.gif') ? 'ift:gif' : 'ift:jpg',
    tbm: 'isch',
    hl: 'zh-TW',
  }

  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  }

  const res = await fetch(endpoint + '?' + qs.stringify(params), { headers })
  const html = await res.text()
  return extractImageUrls(html)
}

function extractImageUrls(text) {
  const urls = []
  const pattern = / href="\/imgres\?(.*?)"/g
  let match
  while ((match = pattern.exec(text)) != null) {
    const query = entities.decodeHTML(match[1])
    urls.push(qs.parse(query).imgurl)
  }
  console.log(urls[0])
  return urls
}

module.exports = { customSearch, imageSearch }
