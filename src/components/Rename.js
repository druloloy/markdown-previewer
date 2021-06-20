import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
function Rename({ setTitle, IsRenameModalOpen, setIsRenameModalOpen }) {

    const [ input, setInput ] = useState('');
    const [ format, setFormat ] = useState(fileFormat[0]);

    const handleInput = (e) => {
        const inp = e.target.value;
        setInput(inp);
    }
    const hideModal = () => {
        setIsRenameModalOpen(false);
    }
    const changeFormat = (e) => {
        const newFormat = e.target.value;
        setFormat(newFormat);
    }
    const submitNewTitle = () => {
        setTitle(input.concat(format));
        setInput('');
        setFormat(fileFormat[0]);
        return hideModal();
    }
    return (
        <Modal 
        show={IsRenameModalOpen} 
        onHide={hideModal}
        backdrop="static">
            <Modal.Header>
                <p className="fs-5">Rename your file.</p>
            </Modal.Header>
            <Modal.Body>
                <div className="form d-md-flex flex-row">

                    <input 
                    id="rename-input" 
                    className="form-control me-2"
                    type="text" 
                    value={input}
                    onChange={handleInput} />

                    <select 
                    className="form-select"
                    defaultValue={fileFormat[0]}
                    onChange={changeFormat}>
                        {fileFormat.map(format=><option>{format}</option>)}
                    </select>

                </div>
            </Modal.Body>      
            <Modal.Footer>
                <div className="d-md-flex flex-row justify-content-between w-100">
                    <button
                    className="btn btn-default btn-md"
                    onClick={hideModal}
                    >Cancel</button>    
                    <button
                    className="btn btn-dark btn-md"
                    onClick={submitNewTitle}
                    >Okay</button>   
                </div> 
            </Modal.Footer>  
        </Modal>
    )
}

const fileFormat = [
    '.md',
    '.txt'
]
export default Rename
