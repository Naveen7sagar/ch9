import exress from 'express'
const app = exress();
const port = process.env.PORT || '3000'
import web from './routes/webroutes.js'
app.use('/',web)


app.listen(port,()=>{
    console.log(`server is running on  http://localhost:${port}`)
})