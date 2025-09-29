import React from "react";
import { styles } from "./styles";
import { TouchableOpacity, Text } from "react-native";

export function Button() {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.title}>Adicionar</Text>
        </TouchableOpacity>
    )
}