const express = require('express');
const app = express();

// middleware to use req.body
app.use(express.json());

const cors = require('cors');
app.use(cors());

const Appointment = require('./models/Appointment');

const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0:27017/wellnessBuddy')
.then(() => {
    console.log('Database is connected');
})
.catch((err) => {
    console.log("error", err);
})

// book an appointment (api)
app.post('/bookappointment', async (req, res) => {
    // console.log(req.body);

    let response = new Appointment(req.body);
    let result = await response.save();
    res.send({ "result": result });
});

const PORT = process.env.PORT || 3102;
app.listen(PORT, () => {
    console.log(`Server is listening at port ${PORT}`);
})