import React, { useState, useEffect } from 'react';
import Markdown2HTML from './services/Markdown2html';

import InputMarkdown from './components/InputMarkdown';
import OutputMarkdown from './components/OutputMarkdown';
import Header from './components/Header';

import './styles/css/App.min.css';

function App() {
    const [ input, setInput ] = useState(placeholder);
    const [ preview, setPreview ] = useState('');

    useEffect(() => {
        setPreview(Markdown2HTML(input));
        return;
    }, [input]);


    return (
        <div className="webpage">
        <Header input={input} setPreview={setPreview}/>
            <div id="app-holder">
                <InputMarkdown input={input} setInput={setInput} setPreview={setPreview} />
                <OutputMarkdown preview={preview} />
            </div>
        </div>
    )
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
export default App;