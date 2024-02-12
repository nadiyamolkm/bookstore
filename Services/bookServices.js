const connection = require('../dbConnection')

const getAllBooks= async()=>{
    const result = await connection.query("SELECT * FROM bookstore")
    .catch((err)=>{
        console.log("Error in fetching books", err)
    })
}