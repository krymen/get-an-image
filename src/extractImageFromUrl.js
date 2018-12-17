const metascraper = require('metascraper')([require('metascraper-image')()])
const request = require('request-promise')

const extractImageFromUrl = async (url) => {
    const html = await request(url)
    const metadata = await metascraper({ html, url })

    if (metadata.image === null) {
        throw new Error(`"${url}" has no images`)
    }

    return metadata.image;
}

module.exports = extractImageFromUrl