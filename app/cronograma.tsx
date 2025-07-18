import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";

import { Button } from '@rneui/themed';
//import { Button } from 'react-native-paper';


export default function Cronograma() {
const theme = useTheme();
    
  return (
    <View  style={{ backgroundColor: theme.colors.primary }} >
      <Text>Tela de cronograma</Text>

      {/* Botão do React Native Element: */}
      <Button title='Teste' containerStyle={{ width: 200 }}></Button>

      {/* Botão do React Native Paper: */}
      {/* <Button icon="camera" mode="contained">
        Camera
      </Button> */}

    </View>
  );
}
