import { View, Text, StyleSheet } from "react-native";

export default function Home() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Olá, usuario</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: { height: "100%", justifyContent: "center", alignItems: "center" },
  text: { fontSize: 24, fontWeight: "500" },
});
