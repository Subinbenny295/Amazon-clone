import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image" src=" https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_ft._CB407693867_.jpg" alt="" />
            
            <div className="home__row">
                <Product 
                id="12321341"
                title="The Lean StartUp: How Constant Innovation Creates Radically Successful Bussiness Paperback"
                price={615}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                />

                <Product 
                id="12321342"
                title="The Story of My Experiments with Truth Mahatma Gandhi (Deluxe Hardbound Edition)"
                price={395}
                rating={5}
                image="https://m.media-amazon.com/images/I/815D+uLxzeL._AC_UL480_FMwebp_QL65_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                id="12321343"
                title="Redmi K20 Pro (Pearl White, 6GB RAM, 128GB Storage)"
                price={24,800.00}
                rating={4}
                image="https://images-eu.ssl-images-amazon.com/images/I/313mbCsu6mL._AC_SY200_.jpg"
                />

                <Product 
                id="12321344"
                title="OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)"
                price={54999}
                rating={5}
                image="https://images-eu.ssl-images-amazon.com/images/I/41vqgX0c5EL._AC_SY200_.jpg"
                />

                <Product 
                id="12321345"
                title="Samsung Galaxy M21 (Raven Black, 6GB RAM, 128GB Storage)"
                price={15,999.00}
                rating={3}
                image="https://images-eu.ssl-images-amazon.com/images/I/41QGvXH2TKL._AC_SY200_.jpg"
                />
            </div>

            <div className="home__row">
                <Product 
                id="12321346"
                title="Mi TV 4A PRO 80 cm (32 inches) HD Ready Android LED TV (Black) | With Data Saver"
                price={12,499.00}
                rating={5}
                image="https://m.media-amazon.com/images/I/71sBGR6LZhL._AC_UY327_FMwebp_QL65_.jpg"
                />
            </div>

        </div>
    );
}
 
export default Home
//https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GBCB428684220_.jpg
