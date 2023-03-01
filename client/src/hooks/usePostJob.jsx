import { useEffect, useState } from "react";
import { reqResApi } from '../config/axiosConfig'

export const usePostJobs = ()=>{
    let getPosts = async (url, token, setList)=>{
        let response 
        let data = []
        try {
            response = await reqResApi.get( url , {
                headers : {'x-token' : `${token}` }
            })
        } catch (error) {
            console.log(error)
        }
        if (response.status == 200) {
            console.log("este es el response", response.data.data)
          data.push(...response.data.data)
          setList(data)
          
        }
    }
    return {
        getPosts
    }
    
}