import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://moveon-api-server.sbox.ali2bd.net/api/v1/customer/dummy-product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            {
                products && <Product products={products} />
            }

        </div>
    );
};

export default Products;