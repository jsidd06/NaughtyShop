import  express  from "express";
import data from './Data/data.js'

const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products);
})

app.get('/', (req, res) => {
    res.send('Server is ready')
})

const port = process.env.PORT || 5000;
app.listen(5000, () => {
    console.log(`server is http://localhost:${port}`);
})