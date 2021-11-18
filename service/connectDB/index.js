const mongoose = require('mongoose');

const ConnectDB = async () => {
    try {
        const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSource=${process.env.DB_AUTH}`
        const option = {
            user: process.env.DB_USER,
            pass: process.env.DB_PASSWORD
        }

        mongoose.connect( url , option );   
        mongoose.connection.on('connected',  () =>  {  
            console.log('DB Connection');
        })
        mongoose.connection.on('error', (err) => {  
            console.log('DB Connection error: ' + err.toString());
        })
    } catch (error) {
        console.log('Connect DB Error : ' , error.toString() )
    }
}

module.exports = { ConnectDB }