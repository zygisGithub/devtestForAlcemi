import React, { useState, useRef, useEffect } from 'react';

const Bottom = () => {
    const [text, setText] = useState('');
    const [overflow, setOverflow] = useState(false);
    const textareaRef = useRef(null);

    const handleChange = (e) => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto'; // reset height to recalc
            const newHeight = Math.min(textarea.scrollHeight, 200); // max 200px
            textarea.style.height = `${newHeight}px`;

            setOverflow(newHeight > 120); // optional for shadow
        }

        setText(e.target.value);
    };

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            const newHeight = Math.min(textarea.scrollHeight, 200);
            textarea.style.height = `${newHeight}px`;
            setOverflow(newHeight > 120);
        }
    }, [text]);


    return (
        <div className="bottom">
            <div className={`textBubble ${overflow ? 'has-shadow' : ''}`}>
                <textarea
                    ref={textareaRef}
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
