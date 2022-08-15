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

        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error: {this.state.errorMessage}
                </div>
            );
        }
        else if (!this.state.errorMessage && this.state.lat) {
            return (
                <div>
                    Latitude: {this.state.lat}
                </div>
            );
        }

        return (
            <div>
                Loading...
            </div>
        );
    }
}
ReactDOM.render(
    <App />,
    document.getElementById("root")
);