const renderBanner = require('../src/renderBanner')

module.exports = (req, res) => {
    res.setHeader("Cache-Control", "max-age=1, no-cache, no-store, stale-while-revalidate")
    res.setHeader("Content-Type", "image/svg+xml")
    res.send(renderBanner())
}

// const express = require('express')
// const renderBanner = require('../src/renderBanner')
// const app = express()
// const port = 5000

// app.get('/', (req, res) => res.send(renderBanner()))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))