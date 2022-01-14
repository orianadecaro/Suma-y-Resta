import React from 'react';
import {Text, View} from 'react-native'
import { StyleSheet } from "react-native";
import styles from './style'; // importo estilo desde archivo externo



export default function Header (){
    return (
        <View >
           <Text style={styles.containerHeader}>Hello World! </Text> 
        </View>
    )
}


//header de la app
 
