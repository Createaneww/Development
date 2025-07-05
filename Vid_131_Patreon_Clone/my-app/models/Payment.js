import mongoose from "mongoose";
import { stringifyCookie } from "next/dist/compiled/@edge-runtime/cookies";
const {Schema , model} = mongoose;

const PaymentSchema = new Schema({
    name: {type: String , required: true},
    to_user: {type: String , redquired: true},
    oid: {type: String , required: true},
    message: {type: String},
    amount: {type: Number , required: true},
    createdAt: {type: Data , default: Date.now},
    updatedAt: {type: Data , default: Date.now},
    done: {type: Boolean , defaul: false },

});
const Payment = model("Payment" , PaymentSchema);
export default mongoose.models.Payment || Payment;