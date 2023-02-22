import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, ScrollView, Text, View } from 'react-native';
import { styles } from './styles'
import PostDayWrapper from './PostDayWrapper';



const ScrollViewPost = ({post, token, getPost, load, setList}) => {
    let idChannelGeneral = "63e3dc46a5dd297fac1ca2a2";
    const [group, setgroup] = useState();
    const [refreshBool, setrefreshBool] = useState(false);
    let refresh = async ()=>{
        setrefreshBool(!refreshBool)
        await getPost(`/channel/${idChannelGeneral}`, token, setList)
        setrefreshBool(false)
    }
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
    },[post])

    return (
        <>
            <FlatList 
             data={group}
             numColumns={1}
             showsVerticalScrollIndicator={false}
             keyExtractor={(group, i)=> String(i) }
             renderItem={({item})=> (<PostDayWrapper group={item} />)}
             inverted={true}
             refreshing={refreshBool}
             onRefresh={refresh}
             
             
            //  ListFooterComponent={ load ?
            //     <ActivityIndicator
            //       size='large'
            //       color='#AEAEAE'
            //     /> : 
            //     <View style={{height: 100}}></View>
            //   }
            />
        </>
    );
}

export default ScrollViewPost;
