import React, { useEffect } from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { StatusBar } from "react-native";
import SafeAreaView from "./src/components/SafeAreaView";
import { useGoogleFonts } from "./src/hooks/useGoogleFonts";
import Navigation from "./src/navigation";
import ThemeProvider from "./src/components/ThemeProvider";
import theme from "./src/styles/theme/default-theme";
import { Provider } from "react-redux";
import { store } from "./src/store";

export default function App() {
  const [fontsLoaded, fontError] = useGoogleFonts();

  useEffect(() => {
    async function screenOrientation() {
      try {
        await ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
      } catch (error) {
        console.error(error);
      }
    }
    screenOrientation();
  }, []);

  if (!fontsLoaded && !fontError) return null;

  return (
    <>
      <StatusBar barStyle="default" backgroundColor={theme.COLORS.ui.PRIMARY} />
      <SafeAreaView>
        <ThemeProvider>
          <Provider store={store}>
            <Navigation />
          </Provider>
        </ThemeProvider>
      </SafeAreaView>
    </>
  );
}
