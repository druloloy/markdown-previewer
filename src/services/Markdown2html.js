const marked = require('marked');
const Prism = require('prismjs');

marked.setOptions({
    breaks:true,
    gfm: true,
    highlight: function(code){
        return Prism.highlight(code, 
            Prism.languages.javascript, 
            'javascript');
    }
});

function Markdown2HTML(markdown){
    const renderedHTML = marked(markdown);
    return renderedHTML;
}

export default Markdown2HTML;