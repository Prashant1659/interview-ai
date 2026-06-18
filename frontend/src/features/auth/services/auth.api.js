import axios from 'axios';

const api = axios.create({
    baseURL:"http://localhost:3000",
    withCredentials:true
})

export async function register({username, email, password}){
    try {
        const response =await api.post('/api/auth/register',{
            username,email, password
        })

        return response.data;
        
    } catch (err) {
        console.log('Error in register api ',err);
    }
}

export async function login({email,password}){
    try {
        const response = await api.post('/api/auth/login',{
            email,password
        })

        return response.data;

    } catch (err) {
        console.log('Error in login api ',err);
    }
}

export async function logout(){
    try {
        const response = await api.get('/api/auth/logout');
        return response.data;
    } catch (err) {
        console.log('Error in logout api ',err);
    }
}

export async function getMe(){
    try {
        const response = await api.get('/api/auth/get-me')
        return response.data
    } catch (err) {
        console.log('error in getMe ',err)
    }
}