const dotenv = require('dotenv');

dotenv.config();
//DATABASE_LOCAL=mongodb://localhost:27017/rental-car-system

const mongoose = require('mongoose');
const app = require('./app');

mongoose
  .connect(process.env.DATABASE_URL, {})
  .then(() => {
    console.log('DB Connection successful!');
  })
  .catch((err) => {
    console.log(err);
  });

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
