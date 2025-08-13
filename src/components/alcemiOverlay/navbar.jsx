import React from 'react';

const Navbar = ({ onClose }) => {
    return (
        <nav>
            <img className='navbarItem' src="/images/clarity_arrow-line.svg" alt=""/>
            <img className='navbarItem' onClick={onClose} src="/images/right%20side.svg" alt=""/>
        </nav>
    );
};

export default Navbar;
