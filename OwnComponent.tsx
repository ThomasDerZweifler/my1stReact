import React from 'react';
import { Button, Text, View, Alert } from 'react-native';

export class OwnComponent extends React.Component {
    render() {
        return (
            <View>
                <Text>OwnComponent</Text>
                <Button
                    onPress={() => Alert.alert("Button was pushed")}
                    title="Push me"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        )
    }
}