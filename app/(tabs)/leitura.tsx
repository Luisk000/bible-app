import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";


export default function Leitura() {
return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Link style={styles.btn_menu} href="/cronograma">Cronograma</Link>
      <Link href="/selecionar-cap">Selecionar</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  btn_menu: {
    width: 200,
    backgroundColor: "red",
  }
})