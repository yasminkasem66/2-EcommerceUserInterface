import { productConstants } from "../types";

const initialState = {
    err: null,
    products: [],
    productsByPrice: {
        under5k: [],
        under10k: [],
        under15k: [],
        under20k: [],
        under30k: []
    },
    loading: false
}
export default (state = initialState, action) => {
    switch (action.type) {
        case productConstants.GET_ALL_PRODUCT_BYSLUG_REQUEST:
            return state = {
                ...state,
                loading: true
            }
        case productConstants.GET_ALL_PRODUCT_BYSLUG_SUCCESS:
            return state = {                           
                ...state,
                loading: false,
                products: action.payload.products,
                productsByPrice:{ ...action.payload.productsByPrice}
            }
        case productConstants.GET_ALL_PRODUCT_BYSLUG_FAILURE:
            return state = {
                ...initialState
            }

        default:
            return state;
    }
}