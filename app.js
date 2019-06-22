const express = require('express')
const app = express()
const port = 9000
//http://localhost:9000?url=scbeasysim://billpayment-anonymous/defcd276-f4b2-4b83-aa97-454fcdec46ea
app.get('/', (req, res) => {
  let targetUrl = req.query.url
  // res.redirect(targetUrl);
  res.send(targetUrl)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))