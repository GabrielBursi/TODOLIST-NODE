import mongoose from "mongoose";

export default function connectMongoDB(){
    try {
        mongoose.set('strictQuery', true)
        mongoose
            .connect(
                'mongodb+srv://root:admin@cluster0.ehevqhq.mongodb.net/?retryWrites=true&w=majority',
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