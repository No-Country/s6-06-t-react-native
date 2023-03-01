import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BACK } from "../config";
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
        //   console.log(response)
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
export const useReaction = ()=>{
    let addReaction = async (url, token, type)=>{
        let response 
        try {
            response = await reqResApi.post( url, type, {
                headers : {'x-token' : token }
            })
        } catch (error) {
            console.log(error)
        }
        // console.log(response)
    }

    let removeReaction = async(url, token, type) =>{
        let response 
        try {
            response = await reqResApi.put( url, type, {
                headers : {'x-token' : token }
            })
        } catch (error) {
            console.log(error)
        }
        // console.log(response)
    }
    return {
        addReaction,
        removeReaction
    }
    
}


export const useComment = ()=>{
    let addComment = async (url, token, type)=>{
        let response 
        try {
            response = await reqResApi.post( url, type, {
                headers : {'x-token' : token }
            })
        } catch (error) {
            console.log(error)
        }
        // console.log(response)
    }
    return {
        addComment,

    }
    
}

export const useUpdatePic= ()=>{
    let updatePic = async ( token, image)=>{
        const profile_pic = {
            name: 'image',
            type: 'image',
            path: image,
            uri: image,
          }
          const formData = new FormData()
          formData.append('profile_pic', profile_pic);
        // let response
        // formData.append('profile_pic', profile_pic);
        fetch(URL_BACK + '/profile/', {
            method: "PUT",
            headers: {
              Accept: "application/json",
              "Content-Type": "multipart/form-data",
              'x-token' : token
        
            },
            body: formData
          })
          .then(response => console.log(response.json()))
          .catch(error => console.log(error))
    }
    return {
        updatePic
    }
}
