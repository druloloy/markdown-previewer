import React from 'react'

function OutputMarkdown({ preview }) {


    const setHTMLPreview = () => {
        return {__html: preview}
    }


    return (
        <div className="output">
            <div
            className="previewer"
            dangerouslySetInnerHTML={setHTMLPreview()}
            ></div>
        </div>
    )
}

export default OutputMarkdown
