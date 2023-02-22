import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text } from 'react-native';
import { styles } from './styles'
import PostDayWrapper from './PostDayWrapper';


const ScrollViewPost = ({ post }) => {
    const [group, setgroup] = useState();
    let GroupByDatePost = (post)=>{
        let dates = []
        post.forEach( p=> {
            let d = new Date(p.createdAt)
            dates.push(d.toDateString())
        });
        dates = new Set(dates)
        dates = [...dates]

        dates.forEach((dat, i) =>{
            dates[i] = {
                date : dat,
                posts : []
            }
            post.forEach((p, j)=>{
                if(new Date(p.createdAt).toDateString() === dat){
                   dates[i].posts.push(p) 
                }
            })
        })
        setgroup(dates)
    }
    useEffect(() => {
        GroupByDatePost(post)
    }, []);
    if (!group) {
        return <Text>Cargando...</Text>
    }

    return (
        <>
            <FlatList 
             data={group}
             numColumns={1}
             showsVerticalScrollIndicator={false}
             keyExtractor={(group, i)=> String(i) }
             renderItem={({item})=> (<PostDayWrapper group={item} />)}
             contentContainerStyle={styles.flatListContain}
             inverted={true}
            />
        </>
    );
}

export default ScrollViewPost;
