import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import whitedog from './assets.whitedog.jpg';
import { EvilIcons } from '@expo/vector-icons';

const Pets = ({name,diff}) => {
    return (
        <View style={styles.container}>
            <Image source = {whitedog} style={styles.image} />
            <View style={styles.view}>
                <Text>{name}</Text>
                <Text>{diff}</Text>
                <Text>Puppy</Text>
            </View>
            <View>
            <EvilIcons name="location" size={30} color="grey" />
            </View>

            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginHorizontal: 30,
        alignItems: "center",
    },
    image: {
        weight: 70,
        width: 70,
        borderRadius: 10,
    },
    view: {
        justifyContent: "center",
        marginHorizontal: 15,
        flex: 4
    }
})

export default Pets;
