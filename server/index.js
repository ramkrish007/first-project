const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');

const db = require('./db')
const movieRouter = require('./routes/movie-router')

const app = express()
const apiPort = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URL || 'mongodb+srv://admin:Ram_krish007@movieapp.5eyzl.mongodb.net/<dbname>?retryWrites=true&w=majority', {
    useNewParser: true,
    useUnifiedTopology: true
});


app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', movieRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))