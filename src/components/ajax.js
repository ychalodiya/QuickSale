/* eslint-disable prettier/prettier */
const apiHost = 'https://bakesaleforgood.com';
export default {
    async fetchInitialDeals() {
        try {
            const response = await fetch(apiHost + '/api/deals');
            const responseJSON = await response.json();
            return responseJSON;
        } catch (errors) {
            console.log(errors);
        }
    },
    async fetchDealDetail(dealID) {
        try {
            const response = await fetch(apiHost + '/api/deals/' + dealID);
            const responseJSON = await response.json();
            return responseJSON;
        } catch (errors) {
            console.log(errors);
        }
    },
    async fetchSearchResults(searchTerm) {
        try {
            const response = await fetch(apiHost + '/api/deals?searchTerm=' + searchTerm);
            const responseJSON = await response.json();
            return responseJSON;
        } catch (errors) {
            console.log(errors);
        }
    },
};
