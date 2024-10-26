import { DrawerActions, useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { Pressable } from 'react-native';
import { globalColors } from '../../theme/theme';
import { IonIcon } from './IonIcon';


export const HamburgerMenu = () => {

    const navigation = useNavigation();

    useEffect( () => {
        navigation.setOptions( {
        headerLeft: () => (
            <Pressable 
            style={{ marginLeft: 5 }}
            onPress={ () => navigation.dispatch( DrawerActions.toggleDrawer ) }>
            <IonIcon name="menu-outline" color={ globalColors.primary } />
            </Pressable>
        )
        } );
    }, [] );

    return (<></>);
}