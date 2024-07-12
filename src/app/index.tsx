import { View, Text, StyleSheet } from "react-native";

export default function SignIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
});
