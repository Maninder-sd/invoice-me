express=require('express')
app=express()

const invoice = require('./api/Invoice')


app.use('/invoice',invoice)


app.listen(3000)