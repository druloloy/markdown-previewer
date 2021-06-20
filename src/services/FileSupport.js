class FileSupport{
    constructor(file = undefined){
        this.file = file
    }
    readFile(file=this.file, callback){
        const reader = new FileReader();
        reader.readAsText(file);
        reader.addEventListener('load', callback);
    }
}
export default FileSupport;