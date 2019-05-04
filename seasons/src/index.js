import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            location: null,
            text: "H",
            errorMessage: ""
        }
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({location: position.coords}),
            err => this.setState({errorMessage: err.message})
            )
     }

    changeText = () => {
       
        this.setState( prevState => ({
            text: prevState.text + "H"
        }))
    }
    
    render() {
        const {location, text, errorMessage} = this.state;

        return (
            <div>
                <h1>{text}</h1>
                <h1 style = {{color: 'red'}}>{errorMessage}</h1>
                <button type = "button" onClick = {this.changeText}>click</button>
                <p> Latitude: {location && location.latitude} </p>
                <p> Longitude: {location && location.longitude} </p>
            </div>);
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)