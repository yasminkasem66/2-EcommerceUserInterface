import { axiosInstance } from "../../network"
import { productConstants } from "../types";

export const getAllProductsBySlug = (slug) => async (dispatch) => {
    let res;
    try {
        dispatch({ type: productConstants.GET_ALL_PRODUCT_BYSLUG_REQUEST })
        res = await axiosInstance.get(`/product/${slug}`)
        console.log(res.data.products);
        const { products, productsByPrice } = res.data
        dispatch({
            type: productConstants.GET_ALL_PRODUCT_BYSLUG_SUCCESS,
            payload: {
                products,
                productsByPrice
            }
        })
    } catch (err) {
        dispatch({
            type: productConstants.GET_ALL_PRODUCT_BYSLUG_FAILURE,
            payload: {
                err
            }
        })
    }
}


