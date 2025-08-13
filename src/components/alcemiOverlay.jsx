import React from 'react';
import "../styles/alcemiOverlay.css";
import Navbar from "./alcemiOverlay/navbar.jsx";
import Col from "./alcemiOverlay/col.jsx"
import Bottom from "./alcemiOverlay/bottom.jsx";
const AlcemiOverlay = ({ onClose }) => {
    return (
        <div>
            <div className='lightBlanket'></div>
            <div className="alcemiOverlay">
                <div className="overlay-content">
                    <Navbar onClose={onClose}/>
                    <Col></Col>
                    <Bottom></Bottom>
                </div>
            </div>
        </div>
    );
};

export default AlcemiOverlay;
