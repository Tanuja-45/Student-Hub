const exp=require('express')
const app=exp()

const studentApp=require('./APIs/studentApi')
const attendanceApp=require('./APIs/attendanceApi')

const cors=require('cors')
app.use(cors({
    origin:'http://localhost:5173'
}))

require('dotenv').config()

app.use('/student-api',studentApp)
app.use('/attendance-api',attendanceApp)
app.use('*',(req,res,next)=>{
    console.log(req)
    res.send({message:"Invalid path"})
})

app.use((err,req,res,next)=>{
    res.send({message:"Error-occurred",errorMessag:err.message})
})




const {MongoClient}=require('mongodb')
let mClient=new MongoClient(process.env.DB_URL)
mClient.connect()
.then((connect_obj)=>{
    const backenddb=connect_obj.db('attendance')
    const studentCollection=backenddb.collection('student')
    const attendance_excelCollection=backenddb.collection('attendance_excel')
    app.set('studentCollection',studentCollection)
    app.set('attendance_excelCollection',attendance_excelCollection)

    console.log("DB is Connected")
    app.listen(process.env.PORT,()=>console.log('http server started at port 4000'))
})
.catch(err=>{
    console.log("Error ",err)
})



