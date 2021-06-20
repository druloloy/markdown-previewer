import React from 'react'
import { FaGithub } from 'react-icons/fa';

function Header({ input, setPreview }) {

    return (
        <div className="navbar navbar-dark bg-dark pe-3 ps-3">
            <h1 className="navbar-brand ms-3 ">DruPiler</h1>
            <a 
            target="_blank"
            rel="noreferrer"
            href="https://github.com/druloloy/markdown-previewer"
            className="link-light me-3"
            ><FaGithub className="fs-2"/></a>
        </div>
    )
}

export default Header
