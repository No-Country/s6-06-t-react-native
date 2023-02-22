import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '../../../utils/icons'
import { styles } from './styles'



export default function AmountCommentsAndReactions({countComments, apoyar, hacergracia ,important, like ,meinteresa}) {

    

  return (
    <View style={styles.ContainCommentReaction}>
      <View style={styles.containReaction} >
        
        {/* <Image source={icons.smile} style={{width:20, height:20}}/>
        <Image source={icons.heart} style={{width:20, height:20}}/>
        <Image source={icons.claping} style={{width:20, height:20}}/> */}
      </View>
      <View style={styles.LengthComment}>
        { countComments > 0 && <Text style={styles.TextAmountComment} >{countComments} Comentarios</Text>}
      </View>
    </View>
  )
}