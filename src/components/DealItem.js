/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {View, Text, TouchableOpacity ,Image, StyleSheet} from 'react-native';
import { priceDisplay } from './util';

export default class DealItem extends Component {
    handlePress = () => {
       this.props.onPress(this.props.deal.key);
    }
    render() {
        const { deal } = this.props;
        return (
            <TouchableOpacity onPress={this.handlePress} style={styles.card}>
                <Image source={{uri: deal.media[0]}} style={styles.media}/>
                <View>
                    <Text style={styles.title}>{deal.title}</Text>
                </View>
                <View style={styles.subview}>
                    <Text>{deal.cause.name}</Text>
                    <Text>{priceDisplay(deal.price)}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
const styles = StyleSheet.create({
    media: {
        width: '100%',
        height: 150,
    },
    card: {
        margin: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        backgroundColor: '#eee',
    },
    title: {
        fontWeight: 'bold',
        padding: 10,
    },
    subview: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
});
