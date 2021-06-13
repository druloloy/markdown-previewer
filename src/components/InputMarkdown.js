import React from 'react';

function InputMarkdown({input, setInput, setPreview}) {
    
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="input">
            <textarea 
                id="editor"
                onChange={handleInput}
                value={input}
            />
        </div>
    )
}

export default InputMarkdown
