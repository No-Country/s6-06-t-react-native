import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import icons from '../../../utils/icons'
import { styles } from './styles'



export default function AmountCommentsAndReactions({countComments, apoyar, hacergracia ,important, like ,meinteresa, isModalVisible,
  setIsModalVisible}) {
  const [countReaction, setcountReaction] = useState([]);
  let sortedReaction= ()=>{
    let array = [
      {
        type: 'apoyar',
        count : apoyar.length
      },
      {
        type: 'megusta',
        count : like.length
      },
      {
        type: 'hacergracia',
        count : hacergracia.length
      },
      {
        type: 'meinteresa',
        count : meinteresa.length
      },
    ]
    array.sort((a, b) => {
      if (a.count < b.count) {
        return 1;
      }
      if (a.count > b.count) {
        return -1;
      }
      return 0;
    });
    setcountReaction(array)
  }
  useEffect(() => {
    sortedReaction()
  }, []);


  return (
    <View style={styles.ContainCommentReaction}>
      <View style={styles.containReaction} >

        {countReaction.map((c, i) =>{
          if (c.type === 'megusta' && i < 3 && c.count > 0) {
            return (<Image source={icons.heart} style={{width:20, height:20}}/>)
          }
          if (c.type === 'meinteresa' && i < 3 && c.count > 0) {
            return (<Image source={icons.thumbsUp} style={{width:20, height:20}}/>)
          }
          if (c.type === 'apoyar' && i < 3 && c.count > 0) {
            return (<Image source={icons.claping} style={{width:20, height:20}}/>)
          }
          if (c.type === 'hacergracia' && i < 3 && c.count > 0) {
            return (<Image source={icons.smile} style={{width:20, height:20}}/>)
          }
        })}

      </View>
      <View style={styles.LengthComment}>
        { countComments > 0 && <Text style={styles.TextAmountComment} onPress={()=> setIsModalVisible(true)}>{countComments} Comentarios</Text>}
      </View>
    </View>
  )
}