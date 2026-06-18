import axios from "axios";

const api = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials: true
})

/**
 * @description it will generate a new interview report based on jobDescription, selfDescription, resumeFile
 * 
 */
export const generateInterviewReport = async ({ jobDescription, selfDescription, resumeFile }) => {

    const formData = new FormData()
    formData.append('jobDescription',jobDescription)
    formData.append('selfDescription',selfDescription)
    formData.append('resume',resumeFile)

    const response = await api.post('/api/interview',formData,{
        "Content-Type": "multipart/form-data"
    })

    return response.data;
}

/**
 * 
 * @description it will return a specific report based on the interviewId
 */

export const getInterviewReportById = async ( { interviewId }) => {
     const response = await api.get(`/api/interview/report/:${interviewId}`)

     return response.data;
}

/**
 * @description it will return all the interview reports that have been generated for that logged in user
 */

export const getAllInterview = async () => {
    const response = await api.get('/api/interview');

    return response.data;
}