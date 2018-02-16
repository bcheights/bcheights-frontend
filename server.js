const express = require('express')
const { parse } = require('url');
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
.then(() => {
    const server = express()

    server.get('/section/:section', (req, res) => {
        const mergedQuery = Object.assign({}, req.query, req.params);
        return app.render(req, res, '/section', mergedQuery);
    });

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
            console.log('> Ready on http://localhost:3000')
    })
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
})