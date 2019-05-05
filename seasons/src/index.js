import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Loading from './Loading';

class App extends React.Component {
    state = {
        location: null,
        text: "TEST",
        errorMessage: ""
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ location: position.coords }),
            err => this.setState({ errorMessage: err.message })
        )
    }

    changeText = () => {

        this.setState(prevState => ({
            text: prevState.text + " TEST"
        }))
    }

    renderContent = () => {
        const { location, text, errorMessage } = this.state;

        if (errorMessage && !location) {
            return (
                <div>
                    <h1 style={{ color: 'red' }}>{errorMessage}</h1>
                </div>)
        }
        else if (!errorMessage && location) {
            return (
                <SeasonDisplay location={location} text={text} errorMessage={errorMessage} changeText={this.changeText} />
            )
        }
        else {
            return <Loading text="Please accept location request" />
        }
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)