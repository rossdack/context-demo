import React, {Component} from 'react';

const red = {
    color: 'red',
    border: '1px solid',
    padding: '10px',
    marginTop: '15%',
    marginRight: '33%',
    marginBottomw: '33%',
    marginLeft: '33%'
};
const blue = {color: 'blue', border: '1px solid', padding: '10px'};
const green = {color: 'green', border: '1px solid', padding: '10px'};

// define context
const AppContext = React.createContext();

const Green = (props) => (
    <div style={green}>{props.valueItem}
        <span>and also all the way down </span>
        <AppContext.Consumer>
            {(context) => context.valueItem}
        </AppContext.Consumer>
    </div>
);

const Blue = (props) => (
    <div style={blue}>
        <span>I am also </span>
        <AppContext.Consumer>
            {(context) => context.valueItem}
        </AppContext.Consumer>
        <Green/>
    </div>
);

class ContextProvider extends Component {
    state = {
        valueItem: 'here'
    };

    render() {
        return <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
    }
}

class App extends Component {

    render() {
        return <ContextProvider>
            <div style={red}>
                <span>Look I am </span>
                <AppContext.Consumer>
                    {(context) => context.valueItem}
                </AppContext.Consumer>
                <Blue/>
            </div>
        </ContextProvider>
    }
}

export default App;
