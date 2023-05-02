import React, { useState } from 'react'
import './Products.css'
import Plane from '../../assets/plane.png'
import { ProductsData } from '../../data/products'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {
    const [parent] = useAutoAnimate()
    const [menu, setMenu] = useState(ProductsData)

    // const filter = (type) => {
    //     setMenu(ProductsData.filter((product)=> product.type === type))
    // }

    const filterProduct = (type) => {
        setMenu(ProductsData.filter((product) =>
            product.type === type
        ))
    }

    return (
        <div className="products-container">
            <img src={Plane} alt="" />
            <h1>Our Feature Products</h1>
            <div className="products">
                <ul className="products-menu">
                    <li onClick={() => setMenu(ProductsData)}>All</li>
                    <li onClick={() => filterProduct('skin care')}>Skin Care</li>
                    <li onClick={() => filterProduct('conditioner')}>Conditioner</li>
                    <li onClick={() => filterProduct('foundation')}>Foundation</li>
                </ul>
                <div className="list" ref={parent}>
                    {
                        menu.map((product, id) => {
                            return (
                                <div key={id} className="product">
                                    <div className="left-s">
                                        <div className="name">
                                            <span>{product.name}</span>
                                            <span>{product.details}</span>
                                        </div>
                                        <span>{product.price}$</span>
                                        <button>show now</button>
                                    </div>
                                    <img src={product.img} alt="" className='product-image' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products
