import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';





class App extends React.Component{


    state = { lat: null, errorMessage: ''};

    componentDidMount(){
        console.log('Component already amount')
        window.navigator.geolocation.getCurrentPosition(
            //To update the state object we call the "setState"
            (position) => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
            
        );
    }
    
    componentDidUpdate(){
        console.log('My component was just updated - It rerendered')
        console.log(this.state.lat)
    }

    // React says that we have to define render!!!
    render() {
        
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <div>Loading!...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));