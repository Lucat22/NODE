const express = require('express')
const app = express()

app.get('/hello', function(req, res){
    res.send('Chegou a resposta')
})

app.get('/nome', function(req, res){
    res.send('Lucas')
})

app.get



app.listen(3000, function(){
    console.log('Server up port 3000')
})