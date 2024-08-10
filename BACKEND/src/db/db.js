const mongoose = require('mongoose')

const db = async() => {
    
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGODB_URL)

        // Add options: useNewUrlParser and useUnifiedTopology => avoid deprecation warnings + ensure a stable connection config
        console.log('Connected to MongoDB')
    } catch (error) {
        console.error("Failed to connect to MongoDB", error)
    }
}

module.exports = db;

//NOTE:
// set strictQuery to false => correctly disables strict query behavior if you run it before the schemas are created. 
// After the schemas are created, changes to this property is ignored.