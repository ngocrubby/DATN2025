import React from "react";
import { View, ActivityIndicator } from "react-native";
import AppNavigation from "./src/navigation/AppNavigation";
import Toast from "react-native-toast-message";
import { AuthProvider, AuthContext } from "./src/context/AuthContext";
// import { CartProvider } from "./src/context/CartContext";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <AuthProvider>
      {/* <CartProvider> */}
        <NavigationContainer>
          <AuthContext.Consumer>
            {({ loading }) =>
              loading ? (
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                  <ActivityIndicator size="large" color="#0000ff" />
                </View>
              ) : (
                <>
                  <AppNavigation />
                  <Toast />
                </>
              )
            }
          </AuthContext.Consumer>
        </NavigationContainer>
      {/* </CartProvider> */}
    </AuthProvider>
  );
};

export default App;