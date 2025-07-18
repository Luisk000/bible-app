import { useNavigation } from "@react-navigation/native";
import { Link, router, Stack } from "expo-router";
import { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  useEffect(() => {
     setTimeout(() => {
        router.replace('/(tabs)/leitura');
     }, 0)
  }, []);

  return null;
}
