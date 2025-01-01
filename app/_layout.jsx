import { Stack } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
    <Stack screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
      <Stack.Screen name="pageWOHeader" options={{ headerShown: false }} />
      <Stack.Screen name="user" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="DrawerDir/drawerPage2" options={{ headerShown: false }}/>
    </Stack>

    // <GestureHandlerRootView style={{ flex: 1 }}>
    //   <Drawer screenOptions={{
    //     headerStyle: {
    //       backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //       fontWeight: 'bold',
    //     },
    //   }}>
    //     < Drawer.Screen
    //       name="index" // This is the name of the page and must match the url from root
    //       options={{
    //         drawerLabel: 'Home',
    //         title: 'overview',
    //       }}
    //     />
    //     <Drawer.Screen
    //       name="about"
    //       options={{
    //         drawerLabel: 'About',
    //         title: 'about',
    //       }}
    //     />
    //     <Drawer.Screen
    //       name="pageWOHeader"
    //       options={{
    //         drawerLabel: 'Page without header',
    //         title: 'pageWOHeader',
    //         headerShown: false // This will hide the header
    //       }}
    //     />
    //   </Drawer>
    // </GestureHandlerRootView >
  );
}
