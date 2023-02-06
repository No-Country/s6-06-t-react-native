import {StatusBar, StyleSheet} from 'react-native';
import { ScreenWidth } from '../../../utils/ScreenDimesions';

export const styles = StyleSheet.create({
    homeContain : {
        flex : 1,
        paddingTop : StatusBar.currentHeight,
        
    },
    HeaderContain : {
        flex : 1,
    },
    ScrollContain : {
        flex : ScreenWidth <= 360 ? 2 : 3,
        paddingVertical : 10
    },

})


