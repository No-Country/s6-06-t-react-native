import React from 'react';
import {View, Text,Image, ScrollView} from 'react-native';
import { styles } from './styles'
import CardPost from './CardPost';

const ScrollViewPost = () => {
    const array = []
    for (let index = 0; index < 15; index++) {
        array.push('a')
        
    }
    return (
        <>
            <ScrollView style={styles.scroll} >
                    <View style={styles.datePublish}>
                        <View style={styles.line}></View>
                        <Text style={styles.date}>Lunes 10 de Enero</Text>
                        <View style={styles.line}></View>
                    </View>
                    {array.map((c, i) => (<CardPost key={i} />))}
                    
                    
            </ScrollView> 
        </>
    );
}

export default ScrollViewPost;
