import React from 'react';
import classes from './Products.module.css';
import ProductItem from './ProductItem';

const DUMMY_PRODUCTS = [{
    id: 'p1',
    title: 'test1',
    description: 'This is book',
    price: 200

},
{
    id: 'p2',
    title: 'test2',
    description: 'This is pen',
    price: 100

}, {
    id: 'p3',
    title: 'test3',
    description: 'This is pencil',
    price: 50

}
]

function Products() {
    return (
        <div className={classes.products}>
            <h2>Buy Your favorite Products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description} />
                ))}
            </ul>
        </div>
    );
}

export default Products;
