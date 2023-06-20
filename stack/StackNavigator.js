import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Detail } from "../screens/Detail";
import { optionsDetail, optionsHome } from "./styles";

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Home"} component={Home} options={optionsHome} />
            <Stack.Screen name={"Detail"} component={Detail} options={optionsDetail} />
        </Stack.Navigator>
    )
}