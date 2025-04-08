// Generate a dummy data in this format in a collection called employees in a db called company

// {
//     name: "Harry",
//     salary: 45000000,
//     language: "Python",
//     city: "New York",
//     isManager: true
// }

// Generate 10 such records when a button called generate data is clicked!
// Create an Express app with mongoose to acheive it
// Everytime the button is clicked, you should clear the collection

import mongoose from "mongoose";
import express from "express";
import { schema } from "./models/schema.js";

let conn = mongoose.connect("mongodb://localhost:27017/company")
const app = express()
const port = 3000

app.set('view engine', 'ejs')

const GetRandom = (arr) => {
  let rno = Math.floor(Math.random() * (arr.length - 1))
  return arr[rno]
}

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' })
})
app.get('/generate', async (req, res) => {
  let randonName = ["Mohan", "Sita", "Priya", "Vanshi"]
  let randomLang = ["CPP", "Java", "CSS", "Python"]
  let randomCity = ["Dholakpur", "Bheempur", "Najabghad", "Ghaziabad"]
  //generate random data
  await schema.deleteMany({})
  for (let i = 0; i < 10; i++) {
    let e = await schema.create({
      name: GetRandom(randonName),
      salary: Math.floor(Math.random()*50000),
      language: GetRandom(randomLang),
      city: GetRandom(randomCity),
      isManager: (Math.random()>0.5)?true:false
    })
     console.log(e);

  }
  res.render('index', { foo: 'FOO' })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})