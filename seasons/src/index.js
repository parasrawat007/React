import React from 'react';
import ReactDOM from "react-dom";

class App extends React.Component {

    constructor(props) {
        super(props);

        //This is the only time we do direct assignment to this.state
        this.state = { lat: null, errorMessage: '' };

        window.navigator.geolocation.getCurrentPosition(
            (position) => {

                // We called setState !!!
                this.setState({ lat: position.coords.latitude });

                // We did not !!!
                //this.state.lat=position.coords.latitude;
            },
            (err) => {
                //setting diffrent state property does not delete other state properties
                this.setState({ errorMessage: err.message });
            }
        );
    }

    render() {
        return (
            <div>
                Latitude: {this.state.lat}
                <br />
                Error: {this.state.errorMessage}
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);