import { View, Text, Image } from 'react-native'
import React from 'react'
import icons from '../../../utils/icons'
import { styles } from './styles'



export default function AmountCommentsAndReactions({countComments, countCandidates}) {

  return (
    <View style={styles.ContainCommentReaction}>
      <View style={styles.containReaction} >
        {<Text style={styles.TextAmountComment} >{countCandidates} Postulaciones</Text>}
      </View>
      <View style={styles.LengthComment}>
        { countComments > 0 && <Text style={styles.TextAmountComment} >{countComments} Comentarios</Text>}
      </View>
    </View>
  )
}