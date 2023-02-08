import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Entypo } from '@expo/vector-icons';
import { colors } from '../../../constants';
import { ObtainHourDate } from '../../../utils/Date';

export default function HeaderCard({data, date}) {
    return (
        <View style={styles.HeaderPost}>
            <View style={{ alignSelf: 'center' }}>
                <Image source={{uri : data.imgUser}} style={[styles.imgUserPost]} />
                <View style={styles.Conection}></View>
            </View>
            <View style={styles.TitlePostContain}>
                <View style={styles.TitlePost}>
                    <Text style={styles.UserName}>{data.NameUser}</Text>
                    <Text style={styles.HoursPost}>{ObtainHourDate(date)}</Text>
                </View>
                <View>
                    <Text style={styles.SubtitlePost}>{`${data.RolUser} de ${data.Organization}`}</Text>
                </View>
            </View>

            <View>
                <Entypo name="dots-three-vertical" size={24} color={colors.facebook} />
            </View>
        </View>
    )
}