import React from "react";
import { View, StyleSheet, Text } from "react-native"

export default function Balance({ saldo, gastos }) {
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currentSymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currentSymbol}>R$</Text>
                    <Text style={styles.expense}>{gastos}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginLeft: 14,
        marginEnd: 14,
        borderRadius: 4,
        paddingTop: 22,
        paddingBottom: 22
    },
    item: {

    },
    content: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    itemTitle: {
        fontSize: 20,
        color: '#DADADA'
    },
    currentSymbol: {
        color: '#DADADA',
        marginRight: 6
    },
    balance: {
        fontSize: 22,
        color: '#2ecc71'
    },
    expense: {
        fontSize: 22,
        color: '#e74c3c'
    }
})
