import React from 'react';
import Menu from './Menu';
function InputMarkdown({ input, setInput }) {
    
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    return (
        <div className="input">
            <Menu input={input} setInput={setInput} />
            <textarea 
                id="editor"
                onChange={handleInput}
                value={input}
            ></textarea>
        </div>
    )
}
export default InputMarkdown
