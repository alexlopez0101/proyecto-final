import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost/basedatosdb");
        console.log("base de datos DB conectada");
    } catch (error) {
        console.log(error);
    }
};