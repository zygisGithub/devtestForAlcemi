import React, { useState } from 'react';
import AlcemiOverlay from './alcemiOverlay.jsx';

const AiPowerSearch = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    if (showOverlay) {
        return <AlcemiOverlay onClose={() => setShowOverlay(false)} />;
    }

    return (
        <div
            className='AiPowerSearch'
            onClick={() => setShowOverlay(true)}
            style={{ cursor: 'pointer' }}
        >
            Ai Powered Search
            <img
                src="/images/fluent_search-sparkle-24-filled.svg"
                alt="Search Icon"
            />
        </div>
    );
};

export default AiPowerSearch;
