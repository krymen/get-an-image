const app = require('./app')
const port = process.env.HTTP_PORT || 3000

app.listen(port, () => console.log(`Listening on port ${port}!`))