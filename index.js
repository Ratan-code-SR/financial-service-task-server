const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
var jwt = require('jsonwebtoken');
require('dotenv').config()
const port = process.env.PORT || 5000
const app = express({
  origin: [
    "http://localhost:5173",
  ]
})


app.use(cors())
app.use(express.json())
app.use(cookieParser())


app.get("/", (req, res) => {
  res.send('server is running')
})

app.listen(port, (req, res) => {
  console.log(`server is running at: http://localhost:${port}`);
})



