
const initialState = {
    shoeSizes: [],
    shoeColor: ''
}

export const ShoeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SHOE':
            {
                return [
                    {
                        shoeSizes: action.payload.sizes,
                        shoeColor: action.payload.color
                    }
                ]
            }

        default:
            return state;
    }
} 