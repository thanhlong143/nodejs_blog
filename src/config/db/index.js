const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connection successful!');
    } catch (error) {
        console.log('Connection failed!!!');
    }
}

module.exports = { connect };
