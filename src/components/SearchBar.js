/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { TextInput, StyleSheet} from 'react-native';
import { debounce } from 'lodash';

export default class SearchBar extends Component {
    state = {
        searchTerm: '',
    }
    debouncSearchDeals = debounce(this.props.searchDeals, 300);
    handleChange = (searchTerm) => {
        this.setState({searchTerm}, () => {
            this.debouncSearchDeals(this.state.searchTerm);
        });

    };
    render() {
        console.log(this.state.searchTerm);
        return (
            <TextInput placeholder="Search All Deals" onChangeText={this.handleChange} style={styles.input}/>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 20,
        marginTop: 50,
        marginHorizontal: 20,
        fontSize: 16,
        fontWeight: 'bold',
    },
});
