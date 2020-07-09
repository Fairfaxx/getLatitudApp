import React from 'react';
import ReactDOM from 'react-dom';





class App extends React.Component{

    constructor(props){
        super(props);
        // Lat abajo dentro del objeto es por "latitude"
        this.state = { lat: null, errorMessage: ''};

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log(position)
                //To update the state object we call the "setState"
                this.setState({ lat: position.coords.latitude });
            },
            (err) => {
                this.setState({ errorMessage: err.message });
            }
        );
    }

    // React says that we have to define render!!!
    render() {
        
        if(this.state.lat){
            return <div>Latitude: {this.state.lat}</div>
        } else if(this.state.errorMessage){
            return <div>Error: {this.state.errorMessage}</div>
        } else {
            return <div>Loading, wait a second...</div>
        }
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));