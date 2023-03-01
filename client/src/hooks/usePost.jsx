import axios from "axios";
import { useEffect, useState } from "react";
import { URL_BACK } from "../config";
import { reqResApi } from '../config/axiosConfig'
import { Platform } from 'react-native'
import { useDispatch } from "react-redux";
import { updateImgUser } from "../redux/actions/loginActions";

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
    const dispatch = useDispatch();
    let updatePic = async ( token, fileUri)=>{
        let filename = fileUri.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : `image`;
        let formData = new FormData();
        formData.append('pic', {uri : fileUri, name: filename, type})
        
  
        try {
            let response = await reqResApi.put('/profile/edit/profile-pic', formData, {
                headers : {
                    'content-type' : 'multipart/form-data',
                    'x-token' : token
                }
            })
            console.log(response.data.data.img_avatar)
            dispatch(updateImgUser(response.data.data.img_avatar))
        } catch (error) {
            console.log(error)
        }
    }
    return {
        updatePic
        }
    }

