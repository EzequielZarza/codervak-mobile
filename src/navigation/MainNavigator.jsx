import { NavigationContainer } from "@react-navigation/native";
import AuthStackNavigator from "./auth/AuthStackNavigator";
import TabsNavigator from "./tabs/TabsNavigator";
import { useSelector, useDispatch } from "react-redux";
import { useGetProfilePictureQuery } from "../services/profileApi";
import { setImage,setUserEmail, setLocalId } from "../store/slices/userSlice";
import { useEffect, useState } from "react";
import { initSessionTable, getSession } from "../database"
import { ActivityIndicator, View } from "react-native";
import {colors} from "../global/colors"

const MainNavigator = () => {

  const [ checkingSession, setCheckingSession ] = useState(true)
  const email = useSelector(state => state.userReducer.email)
  const localId = useSelector(state => state.userReducer.localId)
  const dispatch = useDispatch();

  const {data: profilePicture, isLoading, error} = useGetProfilePictureQuery(localId);

  useEffect(() => {
    const bootstrap = async () => {
      await initSessionTable();
      const session = await getSession(); //En SQLite
      if (session) {
        console.log("Session:", session)
        dispatch(setUserEmail(session.email))
        dispatch(setLocalId(session.localId))
      }
      setCheckingSession(false);
    };
    bootstrap();
  }, []);

  useEffect(() => {
    if(profilePicture){
      dispatch(setImage(profilePicture.image))
    }
  }, [profilePicture]);


  console.log("Email:", email)
  return (
    checkingSession ? <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size='large' color={colors.cobaltBlue}/>
    </View> :
    <NavigationContainer>
      {
        email ? <TabsNavigator /> : <AuthStackNavigator />
      }
    </NavigationContainer>
  )
}

export default MainNavigator