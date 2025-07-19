
import { Stack } from "expo-router";
import * as React from 'react';
import { Drawer } from 'expo-router/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

export default function RootLayout() {
  return <Drawer>
   <Drawer.Screen
     name="index"
     options={{
       drawerLabel: "Home",
       title: "Home",
       drawerItemStyle: { display: 'none' }
     }}
   />
   <Drawer.Screen
     name="(tabs)/leitura"
     options={{
       drawerLabel: "Leitura",
       title: "Leitura",
        drawerIcon: ({color, size}) => (
        <AntDesign name="book" size={32} color={color} />
       )
     }}
   />
   <Drawer.Screen
     name="(tabs)/selecionar-cap"
     options={{
       drawerLabel: "Selecionar",
       title: "Selecionar",
       drawerIcon: ({color, size}) => (
        <Ionicons name="list" size={32} color={color} />
       )
     }}
   />
      <Drawer.Screen
     name="(tabs)/cronograma"
     options={{
       drawerLabel: "Cronograma",
       title: "Cronograma",
       drawerIcon: ({color, size}) => (
        <AntDesign name="clockcircleo" size={32} color={color} />
       )
     }}
   />
   <Drawer.Screen
     name="(tabs)/temas"
     options={{
       drawerLabel: "Temas",
       title: "Temas",
       drawerIcon: ({color, size}) => (
        <FontAwesome5 name="church" size={32} color={color} />
       )
     }}
   />
 </Drawer>
}
