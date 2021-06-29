/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import { priceDisplay } from './util';
import ajax from './ajax';

export default class DealDetail extends Component {
    state = {
        deal: this.props.initialDealData,
    };
    async componentDidMount() {
        const fullDealDetail = await ajax.fetchDealDetail(this.state.deal.key);
        this.setState({
            deal: fullDealDetail,
        });
    }
    render() {
        const {deal} = this.state;
        return (
            <View style={styles.view}>
                <TouchableOpacity style={styles.back} onPress={this.props.onBack}>
                    <Text>Go back</Text>
                </TouchableOpacity>
                <View style={styles.card}>
                    <Image source={{uri: deal.media[0]}} style={styles.media}/>
                    <Text style={styles.title}>{deal.title}</Text>
                    <View style={styles.info}>
                        <Text>{deal.cause.name}</Text>
                    <Text>{priceDisplay(deal.price)}</Text>
                </View>
                </View>
                {deal.user  &&  <View>
                                    <Image style={styles.avatar} source={{uri: deal.user.avatar}} />
                                    <Text>{deal.user.name}</Text>
                                </View>
                }
                <View>
                    <Text>{deal.description}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    view: {
        marginHorizontal: 10,
    },
    media: {
        width: '100%',
        height: 150,
    },
    avatar: {
        width: 60,
        height: 60,
    },
    card: {
        marginTop: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        backgroundColor: '#eee',
    },
    title: {
        fontWeight: 'bold',
        padding: 10,
    },
    info: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    back: {
        marginTop: 50,
        color: '#222',
    },
});
