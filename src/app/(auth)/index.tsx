import { Button } from "@/components/Button";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Home() {
  const { user } = useUser();
  const { signOut } = useAuth();

  return (
    <View style={style.container}>
      <Image source={{ uri: user?.imageUrl }} style={style.image} />
      <Text style={style.text}>Olá, {user?.fullName}</Text>
      <Button icon="exit" title="Sair" onPress={() => signOut()} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    padding: 32,
    gap: 12,
  },
  text: { fontSize: 24, fontWeight: "500" },
  image: { width: 100, height: 100, borderRadius: 100 },
});
