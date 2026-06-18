import mongoose from "mongoose";


async function connectToDB() {

    try {
        await mongoose.connect(process.env.MONGODB_URI)

        console.log("Connected to Database")
    }
    catch (err) {
        console.log(err)
    }
}

export default connectToDB