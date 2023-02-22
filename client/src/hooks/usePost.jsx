import { useEffect, useState } from "react";
import { reqResApi } from '../config/axiosConfig'


export const usePost = ()=>{
    let getPosts = async (url, token, setList)=>{
        let response 
        let data = []
        try {
            response = await reqResApi.get( url , {
                headers : {'x-token' : token }
            })
        } catch (error) {
            console.log(error)
        }
        if (response.status === 200) {
          console.log(response)
          data.push(...response.data.data.posts)
          setList(data)
          
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

