const dotenv = require('dotenv');
dotenv.config();

const express = require('express');

const app = express();

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const cors = require('cors');

const morgan = require('morgan');

app.use(cors());

app.use(morgan('combined'))

const PORT = process.env.PORT || 3000;

const TodoRoutes = require('./routes/todoRoutes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', TodoRoutes);

mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log('Connected to Database')
    })
    .catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`)
})

