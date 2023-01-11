import mongoose from "mongoose";

export default function connectMongoDB(){
    try {
        mongoose.set('strictQuery', true)
        mongoose
            .connect(
                process.env.DATABASE_URI,
                {
                    useNewUrlParser: true,
                    useUnifiedTopology: true
                }
            )
        console.log('Conectou ao MongoDB');
    } catch (error) {
        console.log('Não se conectou ao MongoDB', error);
    }
}