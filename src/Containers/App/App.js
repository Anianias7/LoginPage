import React, {Component} from 'react';
import '../../App.css';
import AppWrapper from "./AppWrapper"
import Form from '../Form/Form'
import Heading from '../../Components/Heading/Heading'


class App extends Component {

    render() {
        return (
            <AppWrapper>
                <Heading/>
                <Form fields={['password', 'email']}/>
            </AppWrapper>
        )
    }
}

export default App;
