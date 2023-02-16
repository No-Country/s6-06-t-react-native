import { View, Text, Image} from 'react-native';
import { styles } from './styles'
import Pinned from './Pinned';
import HeaderCard from './HeaderCard';
import Comments from './Comments'
import { useState } from 'react';
import AmountCommentsAndReactions from './AmountCommentsAndReactions';

export default function CardPost({data}) {
    let shorDataBody = data.description.length >=150 && data.description.slice(0, 150)
    const [short, setShort] = useState(false);
    console.log(data)
    return (
        <View style={styles.PostCard} >
            { data.important &&  <Pinned data={data.author} />}
            
            <HeaderCard data={data.author} date={data.createdAt}/>
           
            <View style={styles.BodyPost}>
                {data.description.length > 150 ? 
                    <Text style={styles.TextBody} >{short ? data.BodyPost  : shorDataBody + '...'}  <Text onPress={()=> setShort(!short)} style={styles.buttonShortPost} >{short ? 'Ocultar' : 'Ver mas'}</Text></Text> 
                    :
                    <Text style={styles.TextBody} >{data.description}</Text>
                }
            
            </View>
            <AmountCommentsAndReactions 
                countComments={data.countComments}
                apoyar={data.apoyar}
                hacergracia={data.hacergracia}
                important={data.important}
                like={data.megusta}
                meinteresa={data.meinteresa}
             />
            <Comments /> 
        </View>
    )
}