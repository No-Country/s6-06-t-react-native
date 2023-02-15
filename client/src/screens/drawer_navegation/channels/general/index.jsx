import React, { useEffect } from 'react';
import {View, SafeAreaView } from 'react-native';
import ScrollViewPost from '../../../../components/home/ScrollViewPost/ScrollViewPost';
import HeaderHome from '../../../../components/home/header/Index';
import { styles } from './styles';
import { useSelector } from 'react-redux'
import { usePost } from '../../../../hooks/usePost';

const Home = () => {
    const state = useSelector((state) => state.login.user);
    // console.log(state.token)
    let idChannelGeneral = "63e3dc46a5dd297fac1ca2a2"
    let dataUser = {
        pathImgUser : 'https://i.ibb.co/Z1ZN1kr/1636128542111.jpg',
        Channel : 'General',
        NumberComunity : 7
    }
    let { Post } = usePost(`/channel/${idChannelGeneral}`, state.token);
    console.log(Post)

    
    



    return (
        <SafeAreaView style={styles.homeContain}>
            <View style={styles.HeaderContain}>
                <HeaderHome 
                    pathImgUser={dataUser.pathImgUser}
                    Channel={dataUser.Channel}
                />

            </View>
            <View style={styles.ScrollContain}>
                <ScrollViewPost 
                    TypeComunity={dataUser.TypeComunity}
                    NumberComunity={dataUser.NumberComunity}
                />
            </View>
        </SafeAreaView>
    );
}

export default Home;
