const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.post('/', (req, res) => {
    if (!req.body.url) {
        return res.status(400).send({ message: "URL is required" })
    }

    return res.sendStatus(200);
})