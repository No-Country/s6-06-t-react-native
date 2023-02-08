import { View, Text, Image} from 'react-native';
import { styles } from './styles'
import Pinned from './Pinned';
import HeaderCard from './HeaderCard';
import Comments from './Comments'
export default function CardPost({data}) {

    return (
        <View style={styles.PostCard} >
            { data.pinned.status &&  <Pinned data={data.pinned} /> }

            <HeaderCard data={data.User} date={data.datePost}/>

            <View style={styles.BodyPost}>
                <Text style={styles.TextBody} >{data.BodyPost}</Text>
            </View>

            <Comments />
        </View>
    )
}