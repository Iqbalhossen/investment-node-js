require('dotenv').config();
const { default: mongoose } = require('mongoose');

mongoose.set("strictQuery", false);

const database = () => {
    try {
        const database = mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
            .then(() => console.log('database connect New Version'))
            .catch((error) => console.log(error));

    } catch (error) {
        console.log("database error");
    }
}


module.exports = database;