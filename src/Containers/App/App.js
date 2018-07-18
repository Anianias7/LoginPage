import React, {Component} from 'react';
import '../../App.css';
import AppWrapper from "./AppWrapper"

import Form from '../Form/Form'
import Heading from '../../Components/Heading/Heading'
import LoginMessage from "../../Components/LoginMessage/LoginMessage";


class App extends Component {

    state = {
        visible: true
    };

    validFormHandler = () => {
        this.setState({
            visible: false
        })
    };

    render() {
        return (
            <React.Fragment>
                {this.state.visible ?
                    <AppWrapper visibility={this.state.visible}>
                        <Heading/>
                        <Form fields={['password', 'email']} validForm={this.validFormHandler}/>
                    </AppWrapper>
                    : <LoginMessage />}
            </React.Fragment>
        )
    }
}

export default App;
