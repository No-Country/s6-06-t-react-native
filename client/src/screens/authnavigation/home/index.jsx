import React from 'react';
import {View, SafeAreaView } from 'react-native';
import ScrollViewPost from '../../../components/home/ScrollViewPost/ScrollViewPost';
import HeaderHome from '../../../components/home/header/Index';
import { styles } from './styles';

const Home = () => {
    return (
        <SafeAreaView style={styles.homeContain}>
            <View style={styles.HeaderContain}>
                <HeaderHome />
            
            </View>
            <View style={styles.ScrollContain}>
                <ScrollViewPost />
            </View>
        </SafeAreaView>
    );
}

export default Home;
