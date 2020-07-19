const renderBanner = require('../src/renderTest')

module.exports = (req, res) => {
    res.setHeader("Cache-Control", "public, max-age=1800")
    res.setHeader("Content-Type", "image/svg+xml")
    res.send(renderBanner())
}