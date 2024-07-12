import { TouchableOpacityProps, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  isLoading?: boolean;
  icon: keyof typeof Ionicons.glyphMap;
}

export function Button({title, isLoading = false}: ButtonProps) {}
