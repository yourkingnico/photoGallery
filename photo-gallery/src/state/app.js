const initialState = {
    tripNumber: 0,
};

const SET_TRIP_NUMBER = 'SET_TRIP_NUMBER';
export const setTripNumber = tripNumber => ({
    type: SET_TRIP_NUMBER, tripNumber
});

export default (state = initialState, action) => {
    switch (action.type) {
      case SET_TRIP_NUMBER:
        return { ...state, tripNumber: action.tripNumber };
      default:
        return state;
    }
};