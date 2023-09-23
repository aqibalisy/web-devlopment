import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const d = new Date();
  let day = d.getDay();
  let type = 'a weekday';
  let adv = 'its time to work';
  if (day === 0 || day === 6) {
    type = 'weekend';
    adv = 'time to rest';
  }

  res.render('index.ejs', {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
