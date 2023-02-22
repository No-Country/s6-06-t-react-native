import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {styles} from './styles'
import { colors } from '../../constants'

export default function ModalComent({Focus}) {
  return (
    <View>
      <View>
        <TextInput
        autoFocus={Focus}
        />
      </View>
    </View>
  )

}
