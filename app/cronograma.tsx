import { Text, View } from "react-native";
import { useTheme } from "react-native-paper";

export default function Cronograma() {
const theme = useTheme();
    
  return (
    <View  style={{ backgroundColor: theme.colors.primary }} >
      <Text>Tela de cronograma</Text>
    </View>
  );
}
