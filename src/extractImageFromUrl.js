const metascraper = require('metascraper')([require('metascraper-image')()])
const got = require('got')

const extractImageFromUrl = async (url) => {
    const { body: html, url: responseUrl } = await got(url)
    const metadata = await metascraper({ html, url: responseUrl })

    if (metadata.image === null) {
        throw new Error(`"${url}" has no images`)
    }

    return metadata.image;
}

module.exports = extractImageFromUrl