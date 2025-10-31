import express from "express"
import cors from 'cors';
// import bodyParser from 'body-parser';
import DbConnection from './config/confing.js';
import "dotenv/config"


import route from './routes/userRoute.js'

const app = express()
// const PORT=process.env.PORT || 3000;
app.use(cors(
  {
    origin:process.env.CLIENT_URL,
    methods:['GET',"POST","PATCH","DELETE"]
  }
))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json())
app.use(express.urlencoded({extended:true}))




app.use('/api',route);
app.get('/', (req, res) => {
  res.send('Server is Runing ....!')
})



app.listen(3000, async() => {
  await DbConnection()
  console.log(`Example app listening on port http://loaclhost:3000`)
})
