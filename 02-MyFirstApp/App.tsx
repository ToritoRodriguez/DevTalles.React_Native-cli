import { PaperProvider } from 'react-native-paper';
import { SafeAreaView } from 'react-native';
// import { HelloWorldScreen } from './src/presentation/screens/HelloWorldScreen';
// import { CounterScreen } from './src/presentation/screens/CounterScreen';
// import { CounterM3Screen } from './src/presentation/screens/CounterM3Screen';
// import { BoxObjectModelScreen } from './src/presentation/screens/BoxObjectModelScreen';
// import { PositionScreen } from './src/presentation/screens/PositionScreen';
// import { DimensionScreen } from './src/presentation/screens/DimensionScreen';
// import { FlexScreen } from './src/presentation/screens/FlexScreen';
// import { FlexDirectionScreen } from './src/presentation/screens/FlexDirectionScreen';
import { HomeWorkScreen } from './src/presentation/screens/HomeWorkScreen';

// import IonIcon from 'react-native-vector-icons/Ionicons'

export const App = () => {
  return (
    <PaperProvider
      // settings={{
      //   icon: (props) => <IonIcon { ...props } />
      // }}
    >
      <SafeAreaView style={{ flex: 1}}>
        {/* <HelloWorldScreen name='Fernando Herrera' /> */}
        {/* <CounterScreen /> */}
        {/* <CounterM3Screen /> */}
        {/* <BoxObjectModelScreen /> */}
        {/* <DimensionScreen /> */}
        {/* <PositionScreen /> */}
        {/* <FlexScreen /> */}
        {/* <FlexDirectionScreen /> */}
        <HomeWorkScreen />
      </SafeAreaView>
    </PaperProvider>
  )
}