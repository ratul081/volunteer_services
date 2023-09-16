const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
require('colors');
const { MongoClient, ObjectId } = require('mongodb');

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Volunteer Network server is running")
})
//MongoDB conection
const user = "volunteer_network"
const password = "volunteer_network"
const uri = `mongodb+srv://${user}:${password}@cluster0.xige0uf.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri);

async function dbConnect() {
  try {
    await client.connect();
    console.log("Database connected".yellow);
  } catch (error) {
    console.log(error.name.bgRed, error.message.bold);
  }
}
dbConnect()

//Database
const volunteerServices = client.db('volunteer_network').collection('volunteer_services');

//endpoints
app.get("/services", async (req, res) => {
  try {
    const query = {}
    const cursor = volunteerServices.find(query)
    const result = await cursor.toArray()
    res.send({
      status: true,
      massage: "Successfully got the data",
      data: result
    })
  }
  catch (error) {
    console.log(error.name.bgRed, error.message.bold);
    res.send({
      success: false,
      error: error.message,
    });
  }
})

app.get("/services/:id", async (req, res) => {
  try {
    const id = req.params.id
    const query = { _id: new ObjectId(id) }
    const result = await volunteerServices.findOne(query)
    res.send({
      status: true,
      massage: "Successfully got the data",
      data: result
    })
  }
  catch (error) {
    console.log(error.name.bgRed, error.message.bold);
    res.send({
      success: false,
      error: error.message,
    });
  }
})

app.get("/order/",async(req,res)=>{


} )

// app.patch("/",async(req,res)=>{
//   try{
//     const data = req.body;

//   }
//   catch(error){
//     console.log(error.name.bgRed, error.message.bold);
//     res.send({
//       success: false,
//       error: error.message,
//     });
//   }
// })



app.listen(port, () => {
  console.log(`Example of app listening on ${port}`);
})