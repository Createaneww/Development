use("CrudDB")

db.createCollection("operations")

// db.operations.insertOne({
//     name: "Create_operation",
//     level: "easy",
//     Practice: "Done"
// })

// db.operations.insertMany([
//     {
//       "name": "Update_operation",
//       "level": "medium",
//       "Practice": "Pending"
//     },
//     {
//       "name": "Delete_operation",
//       "level": "hard",
//       "Practice": "In Progress"
//     },
//     {
//       "name": "Read_operation",
//       "level": "easy",
//       "Practice": "Done"
//     },
//     {
//       "name": "Insert_operation",
//       "level": "medium",
//       "Practice": "Done"
//     },
//     {
//       "name": "Backup_operation",
//       "level": "hard",
//       "Practice": "Pending"
//     },
//     {
//       "name": "Restore_operation",
//       "level": "medium",
//       "Practice": "In Progress"
//     },
//     {
//       "name": "Export_operation",
//       "level": "easy",
//       "Practice": "Done"
//     },
//     {
//       "name": "Import_operation",
//       "level": "hard",
//       "Practice": "Pending"
//     },
//     {
//       "name": "Sync_operation",
//       "level": "medium",
//       "Practice": "Done"
//     }
//   ]
//   )

//Read
// let a = db.operations.find({Practice: "Pending"})  //findone() this will give me first result
// console.log(a.toArray());


//Update

// db.operations.updateOne({level: "easy"} , {$set:{level: "Ultraeasy"}})
// db.operations.updateMany({level: "easy"} , {$set:{level: "Ultraeasy"}})

//Delete
//same like update
// db.operations.deleteMany({level: "easy"})


//Query and PRojection Operator
// https://www.geeksforgeeks.org/mongodb-query-and-projection-operator/