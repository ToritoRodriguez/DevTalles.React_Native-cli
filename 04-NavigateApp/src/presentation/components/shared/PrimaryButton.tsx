import React from 'react'
import { Pressable, Text } from 'react-native'
import { globalStyles } from '../../theme/theme'
import { useNavigation } from '@react-navigation/native';

interface primaryButtonProps {
    onPress: () => void,
    label: string,
}

export const PrimaryButton = ( {onPress, label} : primaryButtonProps ) => {

    const navigation = useNavigation();

    return (
        <Pressable 
            style={globalStyles.primaryButton}
            onPress={ () => onPress() }    
        >
            <Text style={globalStyles.buttonText}>{label}</Text>
        </Pressable>
    )
}
