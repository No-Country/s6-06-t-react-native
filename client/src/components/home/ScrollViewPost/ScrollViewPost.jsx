import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import { styles } from './styles'
import PostDayWrapper from './PostDayWrapper';
import { PostsMock } from '../../../mock/post';

const ScrollViewPost = ({NumberComunity, TypeComunity}) => {
    const [Posts, setPosts] = useState([]);

    let getPosts = async ()=>{
        try {
            let post = await PostsMock
            setPosts(post)
        } catch (error) {
            console.error
        }
    }

    useEffect(() => {
        getPosts()
    }, [Posts]);

    
    return (
        <>
            <ScrollView style={styles.scroll} >
                {
                    Posts.map((p, i) => (
                        <PostDayWrapper 
                            posts={p}
                            date={p.datePost}
                            key={i}
                        />
                    ))
                }
            </ScrollView> 
        </>
    );
}

export default ScrollViewPost;
