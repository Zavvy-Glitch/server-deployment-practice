'use strict';

const app = require('./server/app.js');

//To allow heroku deployment PORT should be identified as a variable rather than a direct port number
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}`);
});