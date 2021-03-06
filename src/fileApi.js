const path = require('path')
const request = require('request-promise')
const uuid = require('uuid/v4')

const PRIVATE_URL = 'http://file-api.fra02.sl.labs'
const CDN_URL = 'https://cdn-labs.livechat-static.com/api/file'

const generateFilename = (imageUrl) => {
    const hash = uuid()
    const extension = path.extname(imageUrl)

    return `${hash}${extension}`
}

const save = async (imageUrl) => {
    const filepath = `/lc/img/${generateFilename(imageUrl)}`

    await request.post(`${PRIVATE_URL}${filepath}`, {
        formData: {
            file: request(imageUrl)
        }
    });

    return `${CDN_URL}${filepath}`;
}

module.exports = {
    save
}