import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./stack/StackNavigator";
import { PokeContextProvider } from "./context/PokeContext";

export default function App() {

  return (
    <NavigationContainer>
      <PokeContextProvider>
        <StackNavigator />
      </PokeContextProvider>
    </NavigationContainer>
  );
}
