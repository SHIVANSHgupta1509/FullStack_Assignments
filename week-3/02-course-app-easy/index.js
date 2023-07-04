const express = require('express');
const app = express();

app.use(express.json());

let ADMINS = [];
let USERS = [];
let COURSES = [];


const adminAuthentication=(req,res,next)=>{
  const username=req.headers.username;
  const password=req.headers.password;
  for(let i=0;i<ADMINS.length;i++){
    if(ADMINS[i].username==username && ADMINS[i].password==password){
     next();
    }
  }
  res.status(404).send("Unauthorised access");
}

const userAuthentication=(req,res,next)=>{
  let username=req.headers.username;
  let password=req.headers.password;
  for(let i=0;i<USERS.length;i++){
    if(USERS[i].username==username && USERS[i].password==password){
      next();
    }
  }
  res.status(403).send({"message":"User not found"});
}
// Admin routes
app.post('/admin/signup', (req, res) => {
   const jsonBody=req.body;
   for(let i=0;i<ADMINS.length;i++){
    if(ADMINS[i].username==jsonBody.username){
      res.status(403).send({"message":"Admin already exists"});
    }
   }
   ADMINS.push(jsonBody);
   let jsonRes={"message":"Admin created successfully"};
   res.send(jsonRes);
});

app.post('/admin/login', adminAuthentication, (req, res) => {
  res.send({"message": "Logged in successfully"});
});

app.post('/admin/courses', adminAuthentication, (req, res) => {
  let courseId=Math.floor(Math.random()*100);
  const jsonBody=req.body;
  jsonBody.courseId=courseId;
  COURSES.push(jsonBody);
  res.send({"message":"Course created succesufully with courseId:"+courseId});
});

app.put('/admin/courses/:courseId',adminAuthentication, (req, res) => {
  const courseId=req.params.courseId;
  let jsonBody=req.body;
  for(let i=0;i<COURSES.length;i++){
    if(COURSES[i].courseId==courseId){
      let course=COURSES[i];
      course.title=jsonBody.title;
      course.description=jsonBody.description;
      course.price=jsonBody.price;
      res.status(404).send({"message":"Course updated successfully"});
    }
  }
  res.send({"message":"Course not found"});

});

app.get('/admin/courses', adminAuthentication, (req, res) => {
  res.send({"courses":COURSES});
});

// User routes
app.post('/users/signup', (req, res) => {
  let username=req.body.username;
  let password=req.body.password;
  let purchasedCourses=[];
  USERS.push({"username":username,"password":password,purchasedCourses});
  res.send({"message": "User created successfully"});
});

app.post('/users/login', userAuthentication,(req, res) => {
  res.send({"message":"Logged in successfully"});
});

app.get('/users/courses',userAuthentication, (req, res) => {
  let course=[];
  for(let i=0;i<COURSES.length;i++){
    if(COURSES[i].published){
      course.push(COURSES[i]);
    }
  }
  res.send({courses:course});
});

app.post('/users/courses/:courseId', userAuthentication,(req, res) => {
  let courseId=Number(req.params.courseId);
  for(let i=0;i<COURSES.length;i++){
    if(COURSES[i].courseId==courseId && courseId.published==true){
      // req.headers.username.purchasedCourses.push(courseId);
      req.headers.user.purchasedCourses.push(courseId);
      res.send({"message":"Course purchased successfully"});
    }
  }
  res.status(403).send({"message":"Course not found"});
});

app.get('/users/purchasedCourses',userAuthentication, (req, res) => {
  let user=req.headers.username;
  let courses=[];
  for(let i=0;i<USERS.length;i++){
    if(USERS[i]==user){
      if(purchasedCourses[0]!=null)
      courses.push(USERS[i].get(purchasedCourses));
      else res.send({"message":"No course purchased"});
    }
  }
  res.send({"message":courses});
});

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
