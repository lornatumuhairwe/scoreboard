// const players = [
//     {
//         name: "Guil",
//         score: 50,
//         id: 1
//     },
//     {
//         name: "Treasure",
//         score: 85,
//         id: 2
//     },
//     {
//         name: "Ashley",
//         score: 95,
//         id: 3
//     },
//     {
//         name: "James",
//         score: 80,
//         id: 4
//     }
// ];

const Header = (props) => {
    return (
        <header>
            <h1>{ props.title }</h1>
            <span className="stats">Players: { props.totalPlayers }</span>
        </header>
    );
};

class Counter extends React.Component {
    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
    };

    decrementScore = () => {
       this.setState( prevState => ({
           score: prevState.score - 1
       }));
    };

    render () {
        return (
            <div className='counter'>
                <button className='counter-action decrement' onClick={ this.decrementScore }> - </button>
                <span className='counter-score'>{ this.state.score }</span>
                <button className='counter-action increment' onClick={ this.incrementScore }> + </button>
            </div>
        );
    }
}

const Player = (props) => {
  return (
      <div className='player'>
        <span className='player-name'>
            { props.name }
        </span>

        <Counter score={ props.score }/>
      </div>
  );
};

class App extends React.Component {
    state = {
        players: [
            {
                name: "Guil",
                id: 1
            },
            {
                name: "Treasure",
                id: 2
            },
            {
                name: "Ashley",
                id: 3
            },
            {
                name: "James",
                id: 4
            }
        ]
    };

    handleRemovePlayer = (id) => {
        this.setState( prevState => {
            return {
                players: prevState.players.filter(player =>  player.id !== id)
            }
        });
    };

    render(){
        return (
            <div className="scoreboard">
                <Header title="Scoreboard" totalPlayers={ this.state.players.length } />

                {/* Players list */}
                {this.state.players.map(player =>
                    <Player
                        name={ player.name }
                        id={player.id}
                        score={ player.score }
                        key={ player.id }
                        removePlayer={this.handleRemovePlayer}
                    />
                )}
            </div>
        )
    }
}

ReactDOM.render (
    <App />,
    document.getElementById('root')
);
