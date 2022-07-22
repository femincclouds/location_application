import { StyleSheet, SafeAreaView, View } from "react-native";

import { AppProvider } from "./src/context/AppProvider";
import Navigation from "./src/navigation/Navigation";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppProvider>
        <Navigation />
      </AppProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  conteiner: {
    height: "auto",
    width: "100%",
  },
});
