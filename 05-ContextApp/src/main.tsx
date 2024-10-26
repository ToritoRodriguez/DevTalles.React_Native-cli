import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigator } from "./presentation/navigators/BottomTabNavigator";

export const main = () => {
    return (
        <NavigationContainer>
        
            <BottomTabNavigator />

        </NavigationContainer>
    );
};