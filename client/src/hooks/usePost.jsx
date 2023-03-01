import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BACK } from "../config";
import { reqResApi } from '../config/axiosConfig'
import { Platform } from 'react-native'

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
        // const profile_pic = {
        //     name: 'image',
        //     type: 'image',
        //     path: image,
        //     uri: '../../assets/users.jpeg',
        //   }
          const formData = new FormData()
        //   formData.append('pic', profile_pic);

          const trimmedURI = (Platform.OS === "android") ? image.uri : image.uri.replace("file://", "");
          const fileName = trimmedURI.split("/").pop();
          const media = {
                name: fileName,
                height: image.height,
                width: image.width,
                type: image.type,
                uri: trimmedURI
            };

        // console.log(formData)
        formData.append('pic', media);
        let response
        // formData.append('profile_pic', profile_pic);
        try {
            response = await reqResApi.put('/profile/edit/profile-pic', formData, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "multipart/form-data",
                    'x-token' : token
                  }, 
            })
        } catch (error) {
            console.log(error)   
        }
        // fetch(URL_BACK + '/profile/', {
        //     method: "PUT",
        //     headers: {
        //       Accept: "application/json",
        //       "Content-Type": "multipart/form-data",
        //       'x-token' : token
        
        //     },
        //     body: formData
        //   })
        //   .then(response => console.log(response.json()))
        //   .catch(error => console.log(error))
        console.log(response)
    }
    return {
        updatePic
    }
}
