import https from 'https';

const endpoint = 'https://eoa7okywim9re97.m.pipedream.net';

const request = https.request(endpoint, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
}, (response) => {
  response.addListener('data', (data) => {
    console.info(`Receive data : ${data.toString()}`);
  });
});

const body = JSON.stringify({
  firstName: "amien",
  lastName: "kurniawan"
})

request.write(body);
request.end();