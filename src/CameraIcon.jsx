import { StyleSheet, View } from 'react-native'
import { FontAwesome6 } from '@expo/vector-icons';
import { colors } from './global/colors';

const CameraIcon = () => {
  return (
    <View style={styles.iconContainer}>
      <FontAwesome6 name="camera" size={24} color={colors.white} />
    </View>
  )
}

export default CameraIcon

const styles = StyleSheet.create({
    iconContainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.darkBlue,
        width:48,
        height:48,
        borderRadius:32
    }
})