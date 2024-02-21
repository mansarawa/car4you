import mongoose from "mongoose";

async function connectToDb(){
    try {
        await mongoose.connect('mongodb+srv://mansarawa:mansa%407773@cluster0.0rqhhtz.mongodb.net/carretal')
        console.log("connect successfully")
    } catch (error) {
        console.log(error)
    }
}
export default connectToDb