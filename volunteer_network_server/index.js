const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
require('colors');
const { MongoClient, ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken')
require('dotenv').config();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Volunteer Network server is running")
})
//MongoDB conection
const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_USERNAME_PASSWORD}@cluster0.xige0uf.mongodb.net/?retryWrites=true&w=majority`;
// const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

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
const volunteerOrders = client.db('volunteer_network').collection('volunteer_orders')
// middleware
function verifyJWT(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).send({
      message: "Unauthorized access"
    });
  }
  const token = authHeader.split(" ")[1];
  try {
    // const decoded = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);
    // req.decoded = decoded;
    // next();
    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decoded) => {
      console.log("🚀 ~ file: index.js:50 ~ jwt.verify ~ err:", err)
      if (err) {
        return res.status(403).send({ message: "Unauthorized access 403" });
      }
      req.decoded = decoded;
      console.log(decoded);
      next();
    })
  } catch (error) {
    console.log(error.name.bgRed, error.message.bold);
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
}

app.post('/jwt', (req, res) => {
  try {
    const user = req.body;
    const token = jwt.sign(user, process.env.ACCESS_SECRET_TOKEN);
    console.log("🚀 ~ file: index.js:59 ~ app.post ~ process.env.ACCESS_SECRET_TOKEN:", process.env.ACCESS_SECRET_TOKEN)
    res.send({ token });
  } catch (error) {
    console.log(error.name.bgRed, error.message.bold);
    res.status(500).send({
      success: false,
      error: error.message,
    });
  }
});

//endpoints
app.get("/services", async (req, res) => {
  try {
    const page = parseInt(req.query.page)
    const size = parseInt(req.query.size)
    const skipNumber = page * size
    const query = {}
    const cursor = volunteerServices.find(query)
    const count = await volunteerServices.estimatedDocumentCount()
    const services = await cursor.skip(skipNumber).limit(size).toArray()
    res.send({
      status: true,
      massage: "Successfully got the data",
      data: { count, services }
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
app.post("/orders", async (req, res) => {
  try {
    const orders = req.body
    const result = await volunteerOrders.insertOne(orders)
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
    })
  }
})

app.get("/orders", verifyJWT, async (req, res) => {
  try {
    const decoded = req.decoded
    if (decoded.email !== req.query.email) {
      res.status(403).send({ message: 'unauthorized access' })
    }
    let query = {}
    if (req.query.email) {
      query = {
        email: req.query.email
      }
    }
    const cursor = volunteerOrders.find(query)
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

app.delete("/orders/:id", async (req, res) => {
  try {
    const id = req.params.id
    const query = { _id: new ObjectId(id) }
    const result = await volunteerOrders.deleteOne(query)
    res.send(result)
  }
  catch (error) {
    console.log(error.name.bgRed, error.message.bold);
    res.send({
      success: false,
      error: error.message,
    });
  }
})

app.listen(port, () => {
  console.log(`Example of app listening on ${port}`);
})