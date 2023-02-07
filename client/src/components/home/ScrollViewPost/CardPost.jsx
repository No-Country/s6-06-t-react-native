import { View, Text, Image} from 'react-native';
import { colors } from '../../../constants'

import { Entypo, Feather, MaterialIcons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { styles } from './styles'

export default function CardPost() {
    return (
        <View style={styles.PostCard} >
            <View style={styles.PushPin}>
                <AntDesign name="pushpin" size={16} color={colors.danger} />
                <Text style={styles.TextPushPin}>Publicación fijada por Gimena Ruiz - Administradora</Text>
            </View>
            <View style={styles.HeaderPost}>
                <View style={{ alignSelf: 'center' }}>
                    <Image source={require('../../../../assets/users.jpeg')} style={[styles.imgUserPost]} />
                    <View style={styles.Conection}></View>
                </View>
                <View style={styles.TitlePostContain}>
                    <View style={styles.TitlePost}>
                        <Text style={styles.UserName}>Gimena Ruiz</Text>
                        <Text style={styles.HoursPost}> 15:50 hs</Text>
                    </View>
                    <View>
                        <Text style={styles.SubtitlePost}>Administradora de Sin Fronteras</Text>
                    </View>
                </View>

                <View>
                    <Entypo name="dots-three-vertical" size={24} color={colors.facebook} />
                </View>
            </View>
            <View style={styles.BodyPost}>
                <Text style={styles.TextBody} >¡Bienvenidos al Pre-seleccionado 7 de Sin Fronteras! Queremos en primer lugar agradecerles por la confianza en este proyecto que ya está cambiando los paradigmas del.... </Text>
            </View>
            <View style={styles.ActionPostContain}>
                <View style={[styles.ActionPost, styles.borderRight]}>
                    <MaterialIcons name="insert-emoticon" size={24} color="black" />
                    <Text>Reaccionar</Text>
                </View>
                <View style={[styles.ActionPost, styles.borderRight]}>
                    <MaterialCommunityIcons name="comment-text-outline" size={24} color="black" />
                    <Text>Comentar</Text>
                </View>
                <View style={styles.ActionPost}>
                    <Feather name="send" size={24} color="black" />
                    <Text>Enviar</Text>
                </View>
            </View>
        </View>
    )
}