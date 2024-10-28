import './gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './presentation/navigation/Navigation';

export const App = () => {
  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  )
}
