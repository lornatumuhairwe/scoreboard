const desc = 'I just learned to create a React node and render it to the DOM.';
const myTitleID = 'main-title';
const name = 'Lorna';

const header = (
    <header>
        <h1 id={ myTitleID }>{ name }'s first React Element!</h1>
        <p className="main-desc">{ desc }</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);
