import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Detail } from "../screens/Detail";
import { Menu } from "../screens/Menu";
import { optionsDetail, optionsHome, optionsMenu, optionsSearch } from "./styles";
import { Search } from "../screens/Search";

const Stack = createStackNavigator()

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={"Menu"} component={Menu} options={optionsMenu} />
            <Stack.Screen name={"Home"} component={Home} options={optionsHome} />
            <Stack.Screen name={"Detail"} component={Detail} options={optionsDetail} />
            <Stack.Screen name={"Search"} component={Search} options={optionsSearch} />
        </Stack.Navigator>
    )
}