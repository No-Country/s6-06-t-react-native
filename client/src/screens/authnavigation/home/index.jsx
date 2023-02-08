import React from 'react';
import {View, SafeAreaView } from 'react-native';
import ScrollViewPost from '../../../components/home/ScrollViewPost/ScrollViewPost';
import HeaderHome from '../../../components/home/header/Index';
import { styles } from './styles';

const Home = () => {
    let dataUser = {
        pathImgUser : 'https://i.ibb.co/Z1ZN1kr/1636128542111.jpg',
        TypeComunity : 'Pre-seleccionado'
    }
    return (
        <SafeAreaView style={styles.homeContain}>
            <View style={styles.HeaderContain}>
                <HeaderHome 
                    pathImgUser={dataUser.pathImgUser}
                    TypeComunity={dataUser.TypeComunity}
                />
            
            </View>
            <View style={styles.ScrollContain}>
                <ScrollViewPost />
            </View>
        </SafeAreaView>
    );
}

export default Home;
