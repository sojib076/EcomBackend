const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
// routes 
const productRoute = require('./routes/productRoute');
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/v1/products', productRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});