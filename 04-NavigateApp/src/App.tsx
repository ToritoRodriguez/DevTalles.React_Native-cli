import './gesture-handler';

import { NavigationContainer } from '@react-navigation/native'
import { Text, View } from 'react-native'
// import { StackNavigator } from './presentation/routes/StackNavigator';
import { SideMenuNavigator } from './presentation/routes/SideMenuNavigator';
// import { BottomTabNavigator } from './presentation/routes/BottomTabsNavigator';

export const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <SideMenuNavigator/>
      {/* <BottomTabNavigator/> */}
    </NavigationContainer>
  )
}