import dotenv from 'dotenv';
dotenv.config();
import  app from './src/app.js'
import  connectToDB  from './src/config/database.js'
const PORT = process.env.PORT || 3000;
// import data from './src/services/temp.js';
// import generateInterviewReport from './src/services/ai.service.js';
connectToDB();
// const {resume, jobDescription, selfDescription } = data;
// generateInterviewReport({ resume, jobDescription, selfDescription});

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})