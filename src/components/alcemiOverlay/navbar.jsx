import React from 'react';

const Navbar = ({ onClose }) => {
    return (
        <nav>
            <img className='navbarItem overlayArrow' onClick={onClose} src="/images/clarity_arrow-line.svg" alt=""/>
            <img className='navbarItem closeBtn' onClick={onClose} src="/images/right%20side.svg" alt=""/>
        </nav>
    );
};

export default Navbar;
