import { useEffect, useState } from "react";
import { reqResApi } from '../config/axiosConfig'


export const usePost = ()=>{
    let getPosts = async (url, token)=>{
        let data 
        try {
            data = await reqResApi.get( url , {
                headers : {'x-token' : token }
            })
        } catch (error) {
            console.log(error)
        }
        if (data.status == 200) {
            return data.data.data.posts
        }
        
        
    }
    return {
        getPosts
    }
    
}

export const usePostCreate = ()=>{
    let create = async(url, token, data) =>{
        let response
        try {
            response = await reqResApi.post(url, data, {
                headers : { 'x-token' : token}
            })
            
        } catch (error) {
            console.log(error)
        }
        return response
    }

    return {
        create
    }

}

