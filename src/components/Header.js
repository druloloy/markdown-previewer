import React from 'react'
import marked from 'marked';

function Header({ input, setPreview }) {

    return (
        <div className="navbar navbar-dark bg-dark pe-3 ps-3">
            <h1 className="navbar-brand ms-3 ">DruPiler</h1>
            <a 
            target="_blank"
            href="https://github.com/druloloy/markdown-previewer"
            className="link-light me-3"
            ><i class="fab fa-github fs-2"></i></a>
        </div>
    )
}

export default Header
