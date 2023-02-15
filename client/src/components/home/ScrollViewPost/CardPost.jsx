import { View, Text, Image} from 'react-native';
import { styles } from './styles'
import Pinned from './Pinned';
import HeaderCard from './HeaderCard';
import Comments from './Comments'
import { useState } from 'react';
import AmountCommentsAndReactions from './AmountCommentsAndReactions';

export default function CardPost({data}) {
    let shorDataBody = data.BodyPost.slice(0, 150)

    const [short, setShort] = useState(false);
    return (
        <View style={styles.PostCard} >
            { data.pinned.status &&  <Pinned data={data.pinned} /> }

            <HeaderCard data={data.User} date={data.datePost}/>

            <View style={styles.BodyPost}>
                <Text style={styles.TextBody} >{short ? data.BodyPost  : shorDataBody + '...'}  <Text onPress={()=> setShort(!short)} style={styles.buttonShortPost} >{short ? 'Ocultar' : 'Ver mas'}</Text></Text>
                
            </View>
            <AmountCommentsAndReactions />
            <Comments />
        </View>
    )
}