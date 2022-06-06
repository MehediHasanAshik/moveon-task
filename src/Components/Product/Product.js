import { Carousel } from 'react-bootstrap';
import React, { useContext, useEffect, useState } from 'react';
import Shoe from '../Shoe/Shoe';
import './Product.css'
import { ShoeContext } from '../../Context/ShoeContext';

const Product = ({ products }) => {

    const [shoeSize, setShoeSize]  = useState();

    const { gallery, title, price: { discounted, old } = {}, variation: { props: props1, skus } = {} } = products;

    const { shoes } = useContext(ShoeContext);
    const shoeColor = shoes[0]?.shoeColor;
    const shoeSizes = shoes[0]?.shoeSizes

    if (shoeColor === 'Black') {
        shoeSizes.sort();
    }

    console.log(props1)
    console.log(skus)

    let pr = [];
    props1?.map((p, index) => {
        if (index === 0) {
            pr = p?.values?.map(pp => pp)
        }

    })

    console.log('pr', pr)

    const handleShoeSize = (size) => {
        setShoeSize(size)
    }

    return (
        <div className='full-container'>
            <div className='img-container'>
                < Carousel variant='dark'>
                    {
                        gallery?.map(gl => (
                            <Carousel.Item>
                                <img
                                    className="d-block"
                                    src={gl.url}
                                    alt=""
                                />
                            </Carousel.Item>
                        ))
                    }
                </Carousel >
            </div>
            <div className='product-container'>
                <div className='title'>
                    <h3>{title}</h3>
                </div>

                <div className='price'>
                    <h4>Price: </h4>
                    <h3>BDT. {discounted} </h3>
                    <h4><s className='discounted-price'>BDT. {old}</s></h4>
                </div>
                <div className='color-container'>
                    <h3>Color: {shoeColor} </h3>
                </div>
                <div className='shoe-cart'>
                    {
                        pr?.map((val, index) => <Shoe key={index} skus={skus} props1={props1} val={val} />)
                    }
                </div>
                <div>
                    <h3 style={{ textAlign: 'left' }}>Sizes: {shoeSize}</h3>
                    <div className='size-cart'>
                        {
                            shoeSizes?.map(sz => <p onClick={() => handleShoeSize(sz)}>{sz}</p>)
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Product;