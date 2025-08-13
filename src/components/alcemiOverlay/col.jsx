import React from 'react';

const Col = () => {
    return (
        <div className='col'>
            <div className='colText'>
                Hello, what are you looking for today?
            </div>
            <div className='colItemsContainer'>
                <div className="colItem">Product</div>
                <div className="colItem">Information</div>
                <div className="colItem">Support</div>
                <div className="colItem">Brand assets</div>
                <div className="colItem">Consultation</div>
                <div className="colItem">Dresses for summer</div>
            </div>
        </div>
    );
};

export default Col;