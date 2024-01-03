import Header from './Header.jsx'
import ImageHeader from './ImageHeader.jsx'
import Footer from './Footer.jsx'
import React, { useState, useEffect } from 'react';

export default function LancomeTeint() {
    const initialCount = parseInt(localStorage.getItem('cartCount')) || 0;
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        // Update local storage whenever count changes
        localStorage.setItem('cartCount', count.toString());
      }, [count]);

    function addToCart() {
        setCount(count + 1);
    }

    const lancomeTeint = { 
        index: 14, 
        src1: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc40ba2f49064f1a7a974_10-01.jpg',
        src2: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc41196ed612d53ea64e5_10-03.jpg',
        src3: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/630fc411536179b581f4f2ed_10-02.jpg',
        src4: 'https://assets.website-files.com/630fa4e1220d4258b5ef5691/632460a3bbcc3b209119a324_12-02%402x.jpg', 
        alt: 'Lancome Teint Ultra Wear SPF15', 
        reference: '#100111', 
        name: 'Lancome Teint Ultra Wear SPF15' ,
        price: '75.00',
        discount: '159.00',
        description: "Elevate your daily beauty ritual with a sophisticated formula that effortlessly imparts a radiant and natural glow. Transform your makeup routine with this luminous tint, where sophistication meets effortless beauty for a radiant and radiant complexion."
      };

    return(
        <>
        <Header />
        <ImageHeader 
            section="Makeup"
            to='/makeup'
            count={count} />
            <div>
            <div className='product-container flex-row'>
                <div className='product-images-container flex-column'>
                    <div className='flex-row'>
                        <img className='product-image' src={lancomeTeint.src1} alt={lancomeTeint.alt} />
                        <img className='product-image' src={lancomeTeint.src2} alt={lancomeTeint.alt} />
                    </div>
                    <div className='flex-row'>
                    <img className='product-image' src={lancomeTeint.src3} alt={lancomeTeint.alt} />
                    <img className='product-image' src={lancomeTeint.src4} alt={lancomeTeint.alt} />
                    </div>
                </div>
                <div className='product-info-container flex-column'>
                        <div>
                            <div className='product-image-heading flex-column'>
                            <h5>{lancomeTeint.name}</h5>
                            <div>{lancomeTeint.reference}</div>
                            </div>
                            <div className='product-cost'>
                                <h5>$ {lancomeTeint.price} USD <span>$ {lancomeTeint.discount} USD</span></h5>
                            </div>
                            <div className='product-description'>
                                <p>{lancomeTeint.description}</p>
                            </div>
                        </div>
                        <div className='addtocart-button-div'>
                            <button onClick={addToCart}>Add to Cart</button>
                        </div>
                    </div>
            </div>
        </div>
        <Footer />
        </>
    )
}