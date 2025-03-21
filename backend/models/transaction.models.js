import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, //ObjectId of User
        ref: "User", //Reference to User model
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    paymentType: {
        type: String,
        enum: ["cash","card"],
        required: true,
    },
    category: {
        type: String,
        enum: ["Saving", "Investment", "Expense"],
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        default: "",
    },
    date: {
        type: Date,
        required: true,
    }
});
const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;