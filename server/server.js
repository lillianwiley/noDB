const express = require('express')
const bodyParser = require('body-parser')

const ctrl= require('./controller')


const app = express();
app.use( bodyParser.json() );

app.get('/api/books', ctrl.getBooks)


app.post('/api/books', ctrl.addBook)




const PORT = 3005;
app.listen(PORT, () => {
    console.log(`eavesdropping on port ${PORT}`);
})