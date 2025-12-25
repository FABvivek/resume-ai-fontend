import axios from "axios";

export const baseUrl = "http://localhost:8080";

export const axiosInstance = axios.create({
  baseURL: baseUrl,
 
});


export const generateResume = async(description)=>{

    const response = await axiosInstance.post("/api/v1/resume/generate", { 
        userDescription: description
     });

     return response.data;
}