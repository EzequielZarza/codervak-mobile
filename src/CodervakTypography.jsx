import { Text } from 'react-native';

const CodervakTypography = ({children, fontFamily}) => <Text style={{fontFamily: fontFamily? fontFamily : 'Space-Mono-Regular', margin: 2}}>{children}</Text>

export default CodervakTypography;