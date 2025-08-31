import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { colors } from './global/colors'

const Search = ({setKeyword}) => 
  <>
    <View style={styles.searchContainer}>
      <TextInput
          style={styles.searchInput}
          placeholder='Buscar vehiculo'
          onChangeText={(text) => {setKeyword(text)}}
      />
      <Octicons name="search" size={32} color={colors.darkGray} />
    </View>
  </>

export default Search

const styles = StyleSheet.create({
  searchContainer:{
    backgroundColor: colors.lightGray,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 16,
    marginVertical: 16
  },
  searchInput:{
    borderWidth: 1,
    borderColor: colors.darkGray,
    borderRadius: 16,
    minWidth: "85%",
    fontFamily: 'Space-Mono-Regular'
  }
})
