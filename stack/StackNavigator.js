import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { optionsHome } from "./styles";

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home} options={optionsHome} />
        </Stack.Navigator>
    )
}