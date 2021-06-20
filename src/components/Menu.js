import React,{ useEffect, useState } from 'react';
import FileProcess from '../services/FileSupport';

// https://react-icons.github.io/react-icons/
import { AiFillFileAdd, AiFillSave} from 'react-icons/ai';
import { BiReset, BiPencil } from 'react-icons/bi';

// https://www.npmjs.com/package/react-tooltip
import ReactTooltip from 'react-tooltip';

import Rename from './Rename';

function Menu({ input, setInput }) {
 
    const [ IsRenameModalOpen, setIsRenameModalOpen ] = useState(false);
    const [ file, setFile ] = useState({name: ''});
    const [ title, setTitle ] = useState('');

    // manage button if disability
    useEffect(()=>{ 
        const resetBtn = document.getElementById('reset-file');
        if(!input){
            resetBtn.style.pointerEvents = "none";
            resetBtn.style.opacity = '.3';
            return;
        }

        resetBtn.style.pointerEvents = "auto";
        resetBtn.style.opacity = 1;
    });
    /**
     * Rename the file
     */
    const openRenameModal = () => {
        setIsRenameModalOpen(true);
    }
    /**
     *  file upload
     */
    const uploadFile = ()=>{
        const fileInput = document.getElementById('file-input');
        setTimeout(() => {
            fileInput.click();
        }, 500);
    };
    /**
     *  register File to the state aand display to preview
     * @param {*} e Event
     */
    const submitFile = (e) => {
        const fileInput = e.target.files;
        setFile(fileInput[0]);
        setTitle(fileInput[0].name);
        const processFile = new FileProcess();
        processFile.readFile(fileInput[0], (e)=>{
            const result = e.target.result;
            setInput(result);
        });
    }
    /**
     * File save
     */
    const saveFile = () => {
        const blobFile = new Blob([input], {type: 'text/markdown'});

        const downloadLink = document.createElement('a');
        downloadLink.download = title;
        downloadLink.href = window.URL.createObjectURL(blobFile);
        console.log(blobFile)
        document.body.appendChild(downloadLink);
        downloadLink.click();
    }

    /**
     * Reset input
     */
    const resetInput = () => {
        setInput('');
        return;
    };

    return (
        <div id="addFile">

            <input 
            type="file" 
            id="file-input" 
            style={{display:'none'}}
            accept=".md, .txt"
            onChange={submitFile}
            />

            <div 
            className="butt butt-clear light fs-3"
            id="rename-file"
            onClick={openRenameModal}
            data-tip="Rename"
            data-place="left"
            data-text-color="#50fa7b"
            data-effect="solid">
                <BiPencil />
            </div>

            <div 
            className="butt butt-clear light fs-3"
            id="add-file"
            onClick={uploadFile}
            data-tip="Add File"
            data-place="left"
            data-text-color="#50fa7b"
            data-effect="solid">
                <AiFillFileAdd />
            </div>
           
            <div 
            className="butt butt-clear light fs-3"
            id="save-file"
            onClick={saveFile}
            data-tip={`Save ${title}`}
            data-place="left"
            data-text-color="#50fa7b"
            data-effect="solid">
                <AiFillSave />
            </div> 

            <div 
            className="butt butt-clear light fs-3"
            id="reset-file"
            onClick={resetInput}
            data-tip="Reset"
            data-place="left"
            data-text-color="#50fa7b"
            data-effect="solid">
                <BiReset />
            </div> 
            
            
            <ReactTooltip />
            <ReactTooltip />
            <ReactTooltip />

            <Rename 
            file={file}
            setTitle={setTitle}
            IsRenameModalOpen={IsRenameModalOpen}
            setIsRenameModalOpen={setIsRenameModalOpen}
            />
        </div>
    )
}

export default Menu
