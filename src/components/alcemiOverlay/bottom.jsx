import React, { useState } from 'react';

const Bottom = () => {
    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div className="bottom">
            <div className={`textBubble ${text ? 'has-shadow' : ''}`}>
                <textarea
                    placeholder="Ask anything..."
                    rows={1}
                    value={text}
                    onChange={handleChange}
                ></textarea>
                <button className="micButton">
                    <img src="/images/mdi_microphone.svg" alt="mic icon" />
                </button>
            </div>
            <div className='footer'>
                <img className='poweredBy' src="/images/Powered%20by.svg" alt="" />
            </div>
        </div>
    );
};

export default Bottom;
