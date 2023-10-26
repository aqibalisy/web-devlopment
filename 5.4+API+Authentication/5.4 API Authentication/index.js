import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;
const API_URL = 'https://secrets-api.appbrewery.com/';

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = 'aqib';
const yourPassword = 'aqibali';
const yourAPIKey = 'c74f51c5-169d-4987-b570-7b8ad11e0ec3';
const yourBearerToken = '5f3d86fd-50ff-40c4-a0b3-bde8d4285eba';

app.get('/', (req, res) => {
  res.render('index.ejs', { content: 'API Response.' });
});

app.get('/noAuth', (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    let result = axios.get(API_URL + '/random');
    res.render('index.ejs', { content: JSON.stringify(result.data) });
  } catch (error) {
    res.status(404).sendFile(error.message);
  }
});

app.get('/basicAuth', (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  try {
    let result = axios.get(API_URL + '/all?page=2', {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs",{content: JSON.stringify(result.data)}), undefined
  } catch (error) {
     res.status(404).send(error.message);
  }
});

app.get('/apiKey', (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try {
    let result = axios.get(API_URL,"/filter",{
      params:{
        score:5,
        apiKey:yourAPIKey
      }
    })
    res.render("index.js",{content:JSON.stringify(result.data)})
  } catch (error) {
     res.status(404).send(error.message);
  }
});
const config = {
  headers: {
    Authorization: `Bearer ${yourBearerToken}`,
  },
};
app.get('/bearerToken', (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
 try {
  let result = axios.get(API_URL,config)
  res.render("index.html",{content:JSON.stringify(resul.data)})
 } catch (error) {
  res.status(404).send(error.message);
 }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
