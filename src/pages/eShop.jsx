import React from 'react';
import '../styles/eshop.css';
import AiPowerSearch from "../components/AiPowerSearch.jsx";
import AlcemiOverlay from "../components/alcemiOverlay.jsx";
const EShop = () => {
    return (
        <div className='eShop'>
            <img className="desktop-img" src="/images/eshop.png" alt="E-Shop" />
            <img className="mobile-img" src="/images/eshopMobile.png" alt="E-Shop Mobile" />
            <AiPowerSearch></AiPowerSearch>
        </div>
    );
};

export default EShop;
