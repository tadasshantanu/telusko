const express = require ('express');
const mongoose = require ('mongoose');
const url = 'mongodb://localhost/shredder'

const app = express();

mongoose.connect(url, {useNewUrlParser:true});
const con = mongoose.connection

con.on('open', function(){
   console.log('connected...')
})
app.use(express.json());
const sharpnerRouter = require('./routes/sharpners');
app.use('/sharpners',sharpnerRouter)

app.listen(3000, ()=>{
    console.log('server started')
})