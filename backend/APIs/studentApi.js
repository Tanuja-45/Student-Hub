//create mini-express app
const exp = require("express");

require('dotenv').config()

const studentApp = exp.Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const tokenVerify = require("../Middleware/tokenVerification");
const expressAsyncHandler = require("express-async-handler");

//add body parser middleware
studentApp.use(exp.json());

//create sample rest api(req handlers- routes)
//route to get users(protected route)
studentApp.get(
  "/student",
  tokenVerify,
  expressAsyncHandler(async (req, res) => {
    //get usersCollection obj
    const studentCollection = req.app.get("studentCollection");
    //get users data from usersCollection of DB
    let usersList = await studentCollection.find().toArray();
    //send users data to client
    res.send({ message: "users", payload: usersList });
  })
);

studentApp.get("/", (req, res) => {
  res.send({ message: "API is connected successfully!" });
});

//route to send one user by id(protected route)
studentApp.get(
  "/student/:studentID",
  tokenVerify,
  expressAsyncHandler(async (req, res) => {
    //get usersCollection obj
    const studentCollection = req.app.get("studentCollection");
    //get id from url
    const studentIDOfUrl = req.params.studentID;
    //find user by id
    let user = await studentCollection.findOne({
      studentID: { $eq: studentIDOfUrl },
    });
    //send res
    res.send({ message: "one user", payload: user });
  })
);

//route to create user (public route)
studentApp.post(
  "/student",
  expressAsyncHandler(async (req, res) => {
    //get usersCollection obj
    const studentCollection = req.app.get("studentCollection");
    //get new User from client
    const newUser = req.body;

    //verify duplicate user
    let existingUser = await studentCollection.findOne({
      studentID: newUser.studentID,
    });
    //if user already existed
    if (existingUser !== null) {
      res.send({ message: "User already existed" });
    }
    //if user not existed
    else {
      //hash the password
      let hashedpassword = await bcryptjs.hash(newUser.password, 7);
      //replace plain password with hashed password in newUser
      newUser.password = hashedpassword;
      //add products property
      newUser.products=[];
      //save user
      await studentCollection.insertOne(newUser);
      //send res
      res.send({ message: "user created" });
    }
  })
);

//user login(authentication)(public route)
studentApp.post(
  "/login",
  expressAsyncHandler(async (req, res) => {
    console.log("Received login request: ", req.body); // Log received credentials

    const studentCollection = req.app.get("studentCollection");
    const userCred = req.body;
    let dbUser = await studentCollection.findOne({ email: userCred.email });
    
    if (dbUser === null) {
      console.log("Invalid username"); // Log issue
      res.send({ message: "Invalid username" });
    } else {
      let result = await bcryptjs.compare(userCred.password, dbUser.password);
      if (!result) {
        console.log("Invalid password"); // Log issue
        res.send({ message: "Invalid password" });
      } else {
        let signedToken = jwt.sign({ studentID: userCred.studentID }, process.env.SECRET_KEY, {
          expiresIn: "1h",
        });
        console.log("Login success for user: ", dbUser.studentID); // Log successful login
        res.send({
          message: "login success",
          token: signedToken,
          user: dbUser,
        });
      }
    }
  })
);


//route to update user(protected route)
studentApp.put(
  "/student",
  tokenVerify,
  expressAsyncHandler(async (req, res) => {
    //get usersCollection obj
    const studentCollection = req.app.get("studentCollection");
    //get modified user from client
    let modifiedUser = req.body;
    //modify by username
    await studentCollection.updateOne(
      { studentID: modifiedUser.studentID },
      { $set: { ...modifiedUser } }
    );
    res.send({ message: "User modified" });
  })
);




   
//export userApp
module.exports = studentApp;