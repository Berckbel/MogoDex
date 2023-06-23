import { createStackNavigator } from "@react-navigation/stack";

import { optionsDetail, optionsHome, optionsMenu, optionsSearch, optionsWho } from "./styles";
import { Home } from "../screens/Home";
import { Detail } from "../screens/Detail";
import { Menu } from "../screens/Menu";
import { Search } from "../screens/Search";
import { Who } from "../screens/Who";

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Menu"} component={Menu} options={optionsMenu} />
            <Stack.Screen name={"Home"} component={Home} options={optionsHome} />
            <Stack.Screen name={"Detail"} component={Detail} options={optionsDetail} />
            <Stack.Screen name={"Search"} component={Search} options={optionsSearch} />
            <Stack.Screen name={"Who"} component={Who} options={optionsWho} />
        </Stack.Navigator>
    )
}