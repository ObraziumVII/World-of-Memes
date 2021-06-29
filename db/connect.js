require('dotenv').config();
const mongoose = require('mongoose');

const dbUrl = process.env.DB;
const options = {
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

function connect() {
  mongoose.connect(dbUrl, options)
    .then(() => console.log('База данных успешно подключена! :)'))
    .catch((err) => console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', err));
}

function disconnect() {
  mongoose.disconnect()
    .then(() => console.log('Disconnected'))
    .catch((err) => console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', err));
}

module.exports = { connect, disconnect };
