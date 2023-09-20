import express from 'express';
const app = express();
const port = 3000;
app.get('/', (req, res) =>{
    // console.log(req.rawHeaders);
    res.send("<h1>HELLO</h1>");
});
app.get('/contactdetails', (req, res) => {
  // console.log(req.rawHeaders);
  res.send('<h1>+91-8440814315</h1>');
});
app.get('/about', (req, res) => {
  // console.log(req.rawHeaders);
  res.send('<h1>A Dev :)</h1>');
});

app.listen(port,()=>{
console.log(`app listening on port ${port}`);
});