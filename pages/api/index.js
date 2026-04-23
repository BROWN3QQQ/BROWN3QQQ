import ua from 'universal-analytics'
const { buildSvg } = require('../../utils/build-svg')

export default async (req, res) => {
    ua('UA-76312016-3').pageview('/api').send()

    res.statusCode = 200
    res.setHeader('Content-Type', 'image/svg+xml')
    res.setHeader('Cache-Control', 'max-age=3600')
    res.end(buildSvg({ date: new Date() }))
}
