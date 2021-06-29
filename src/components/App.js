/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ajax from '../components/ajax';
import DealList from '../components/DealList';
import DealDetail from './DealDetail';
import SearchBar from './SearchBar';

export default class App extends Component {
    state = {
        deals: [],
        dealsFromSearch: [],
        currentDealId: null,
    }
    searchDeals = async (searchTerm) => {
        let dealsFromSearch = [];
        if (searchTerm) {
             dealsFromSearch = await ajax.fetchSearchResults(searchTerm);

        }

        this.setState({dealsFromSearch});
    }
    async componentDidMount() {
        const deals = await ajax.fetchInitialDeals();
        this.setState({ deals });
    }
    setCurrentDeal = (dealID) => {
        this.setState({
            currentDealId: dealID,
        });
    }
    unsetCurrentDeal = (dealID) => {
        this.setState({
            currentDealId: null,
        });
    }
    currentDeal = () => {
        return this.state.deals.find(
            (deal) => deal.key === this.state.currentDealId
        );
    }
    render() {
        if (this.state.currentDealId) {
            return (
                <View>
                    <DealDetail onBack={this.unsetCurrentDeal}  initialDealData={this.currentDeal()}/>
                </View>
           );
        }
        const dealsToDisplay = this.state.dealsFromSearch.length > 0 ? this.state.dealsFromSearch : this.state.deals;
        if (dealsToDisplay.length > 0) {
            return (
                <View>
                    <SearchBar searchDeals= {this.searchDeals}/>
                    <DealList deals={dealsToDisplay} onItemPress={this.setCurrentDeal}/>
                </View>
            );
        }
        return (
            <View style = {styles.container}>
                <Text style= {styles.header}>QuickSale</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        fontSize: 40,
    },
});
