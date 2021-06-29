/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import DealItem from './DealItem';

export default class DealList extends Component {
    render() {
        return (
            <View style={styles.list}>
                <FlatList
                data={this.props.deals}
                renderItem = {({item}) => <DealItem deal={item} onPress={this.props.onItemPress}/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        backgroundColor: '#ddd',
        width: '100%',
        textAlign: 'center',
    },
    card: {
        textAlign: 'center',
    },
});
