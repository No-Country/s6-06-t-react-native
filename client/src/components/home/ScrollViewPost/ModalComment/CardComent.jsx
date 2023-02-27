import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { colors } from '../../../../constants';
import { ObtainHourDate } from '../../../../utils/Date';

const CardComent = () => {
    let data = {
        author: {
            fullName : 'Random',
            img_avatar : 'https://www.pngitem.com/pimgs/m/421-4212341_default-avatar-svg-hd-png-download.png'
        },
        body : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur soluta quis cum! Nulla voluptatibus, voluptatem minima magnam unde dolore animi ullam dolorem aspernatur, accusamus in odio voluptas dicta eum molestiae!',
        createAt : '2023-02-15T19:23:00'
    }
    return (
        <View style={styles.cardContain}>
            <View style={styles.imgContain}>
                <Image source={{ uri: data.author.img_avatar }} style={styles.img} />
            </View>
            <View style={styles.bodyContain}>
                <Text style={styles.name}>{data.author.fullName}</Text>
                <Text style={styles.hour}>{ObtainHourDate(data.createAt)}</Text>
                <Text style={styles.body}>{data.body}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContain: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        borderBottomColor: colors.grey_line,
        borderBottomWidth: 0.5,
        paddingVertical: 10
    },
    imgContain: {
        marginLeft: 10,
    },
    img: {
        borderRadius: 40,
        width: 40,
        height: 40
    },
    bodyContain: {
        width: '80%',
        paddingRight: 10
    },
    name: {
        fontSize: 16,
        fontWeight: '700',
    },
    hour: {
        fontSize: 13,
        color: colors.text_grey,
        fontWeight: 'bold'
    },
})

export default CardComent;
