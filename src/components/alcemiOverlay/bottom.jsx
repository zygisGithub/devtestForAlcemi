import React, { useState, useRef, useEffect } from 'react';

const Bottom = () => {
    const [text, setText] = useState('');
    const [overflow, setOverflow] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const textareaRef = useRef(null);

    // Detect mobile viewport
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChange = (e) => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';

            const maxHeight = isMobile ? 150 : 200; // smaller height on mobile
            const newHeight = Math.min(textarea.scrollHeight, maxHeight);
            textarea.style.height = `${newHeight}px`;

            setOverflow(newHeight >= maxHeight);
        }

        setText(e.target.value);
    };

    useEffect(() => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';

            const maxHeight = isMobile ? 150 : 200;
            const newHeight = Math.min(textarea.scrollHeight, maxHeight);
            textarea.style.height = `${newHeight}px`;

            setOverflow(newHeight >= maxHeight);
        }
    }, [text, isMobile]);

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
            <div className="footer">
                <img className="poweredBy" src="/images/Powered%20by.svg" alt="" />
            </div>
        </div>
    );
};

export default Bottom;
