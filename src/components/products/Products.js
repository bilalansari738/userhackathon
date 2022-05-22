import React from 'react';
import image from '../../Data/watch.jpg';

export const Products = () => {
    let products = [{
        pic: image,
        title: "Beautiful Watch",
        price: 20000,
        description: "This is an imported luxury watch",
    }]
    return (
        <div className='container'>
            <div className='text-center my-3'>
                <h1>Latest Products</h1>
            </div>
            <div className='row'>
                <div className='col-md-4'>
                    <div>
                        <img src={products[0].pic} alt="watch" width="100%" />
                    </div>
                    <div>
                        <h3>Beautiful Watch</h3>
                    </div>
                    <div>
                        <h5>Rs : 20,000</h5>
                    </div>
                    <div>
                        <p>This is an imported watch.</p>
                    </div>
                    <div>
                        <button className='btn btn-primary'>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
