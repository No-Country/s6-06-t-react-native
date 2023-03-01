import React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import CardComent from './CardComent';

const ListComentContain = ({ListComent, Load}) => {
    return (
        <View style={{flex: 2}}>

        {ListComent.length > 0 ? 
        
        <FlatList 
          data={ListComent}
          numColumns={1}
          showsVerticalScrollIndicator={false}
          keyExtractor={(Coment, i)=> String(i) }
          renderItem={({item})=> (<CardComent item={item} />)}
          //  refreshing={refreshBool}
          //  onRefresh={refresh}
          onEndReachedThreshold={0.1}
          ListFooterComponent={ Load ?
              <ActivityIndicator
                size='large'
                color='#AEAEAE'
              /> : 
              <View style={{height: 50}}></View>
            }
        /> : <ActivityIndicator
              size='large'
              color='#AEAEAE'
              style={{flex : 2}}
            />

        }
      </View>
    );
}

const styles = StyleSheet.create({})

export default ListComentContain;
