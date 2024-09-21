const express = require('express')
const app = express()

app.use("/test",(req,res)=>{
    res.send('hello I am login')
})
app.use("/",(req,res)=>{
    res.send('hello I am responding from server')
})

app.listen(7777,()=>console.log('server is successfully running on port 7777'))


