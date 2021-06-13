const marked = require('marked');

function Markdown2HTML(markdown){
    const renderedHTML = marked(markdown);
    return renderedHTML;
}

export default Markdown2HTML;