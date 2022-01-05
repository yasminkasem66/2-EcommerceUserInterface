import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsBySlug } from '../../store/actions';
import { useParams } from "react-router-dom";
import Layout from '../../components/Layout';
import './style.css';

export const ProductListPage = () => {
    let params = useParams();
    const { slug } = params;
    const product = useSelector(state => state.product)
    console.log("productproductproduct", product)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProductsBySlug(slug))
    }, [])
    return (
        <>
            <Layout>
                {
                    Object.keys(product.productsByPrice).map((key, index) => {
                        return (
                            <div className="card">
                                <div className="cardHeader">
                                    {/* <div>Samsung mobile under 10k</div> */}
                                    <div> {slug} {key }</div>
                                    <button>view all</button>
                                </div>
                                <div style={{display: 'flex'}}>
                                    {
                                        product.productsByPrice[key].map(product =>
                                            <div className="productContainer">
                                                <div className="productImgContainer">
                                                    <img src={product.productPictures[0].img} alt="" />
                                                    {console.log(product)}

                                                </div>
                                                <div className="productInfo">
                                                    <div style={{ margin: '5px 0' }}> {product.name}</div>
                                                    <div>
                                                        <span>4.3</span>&nbsp;&nbsp;
                                                        <span>14562</span>
                                                    </div>
                                                    <div className="productPrice"> {product.price}</div>
                                                </div>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        )
                    })

                }


            </Layout>

        </>
    )
}
