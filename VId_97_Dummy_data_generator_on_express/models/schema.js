import mongoose from "mongoose";

const CompanySchema = new mongoose.Schema({
    name: String,
    salary: Number,
    language: String,
    city: String,
    isManager: Boolean
})

export const schema = mongoose.model('schema' , CompanySchema)