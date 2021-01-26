
const mongoose = require('mongoose')

const url = 'mongodb+srv://admin:Ram_krish007@movieapp.5eyzl.mongodb.net/<dbname>?retryWrites=true&w=majority'

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const db = mongoose.connection

module.exports = db


