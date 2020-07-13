import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';





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

    renderContent(){
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} />
        }
        return <Spinner message="Please accept the location request"/>; 
    };


    // React says that we have to define render!!!
    render() {
        return <div className="red-border">
            {this.renderContent()}
        </div>
        
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));