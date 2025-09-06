import { StyleSheet, Text, View, Pressable } from "react-native";
import { colors } from "./global/colors";
import { setSelectedCategory } from "./store/slices/shopSlice";
import { useDispatch } from "react-redux";
import CodervakTypography from "./CodervakTypography";
import { useNavigation } from '@react-navigation/native'
import  { Entypo } from '@expo/vector-icons';


const Header = ({title, subtitle}) => {

  const dispatch = useDispatch();
  const { navigate, canGoBack, goBack } = useNavigation()
  const goBackAvailable = canGoBack()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      { goBackAvailable &&
        <Pressable
          onPress={() => goBack()}
          style={styles.button}
        > 
          <View style={styles.smallContainer}>
            <Entypo name="back" size={24} color="black" />
            {/* <CodervakTypography fontFamily='Space-Mono-Bold' style={styles.buttonText}> Volver al menu principal</CodervakTypography> */}
          </View>
        </Pressable>
      }
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.darkBlue,
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallContainer: {
    backgroundColor: colors.darkBlue,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 36,
    fontSize: 24,
    color: colors.white,
    fontFamily: 'Space-Mono-Bold'
  },
  subtitle: {
    marginTop: 8,
    fontSize: 20,
    color: colors.black,
    fontFamily: 'Space-Mono-Bold'
  }
})