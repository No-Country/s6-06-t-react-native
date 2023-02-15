import { useEffect, useState } from "react";
import { reqResApi } from '../config/axiosConfig'


export const usePost = (url, token)=>{
    const [Post, setPost] = useState([]);

    useEffect(() => {
        getPosts(url, token)
        
    }, []);

    let getPosts = async (url, token)=>{
        try {
            let data = await reqResApi.get( url , {
                headers : {'x-token' : token }
            })
            if (data.status == 200) {
                setPost(data.data.posts)
            }
        } catch (error) {
            console.log(error)
        }
    }
    
    return {
        Post
    }
    
}
