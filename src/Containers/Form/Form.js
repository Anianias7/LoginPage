import React, {Component} from 'react'
import FormWrapper from './FormWrapper'
import Input from '../../Components/Input'
import ValidatorService from '../../services/validators.service'
import Error from "../Error/Error";

const LOGIN = 'test@test.pl';
const PASSWORD = 'Password1';

const createInitialState = (fieldsArray) => {
    return fieldsArray.reduce((acc, val) => {
        return {
            ...acc,
            [val]: {
                value: "",
                touched: false,
                valid: false,
                msg: []
            }
        }
    }, {})
};

class Form extends Component {
    state = {
        ...createInitialState(this.props.fields),
        checked: false
    };

    userInputHandler = ({name, value, validators, required}) => {
        let requiredMessage = undefined;
        if (required)
            requiredMessage = ValidatorService.required(value);
        const msges = validators.reduce((messages, validator) => {
            return messages.concat(validator(value) || []);
        }, []);

        this.setState(
            {
                [name]: {
                    ...this.state[name],
                    value,
                    valid: requiredMessage === undefined && msges.length === 0,
                    msg: requiredMessage !== undefined ? [requiredMessage] : msges
                }
            }
        );
    };

    onTouched = (event) => {
        const name = event.target.name;
        this.setState(
            {
                [name]: {
                    ...this.state[name],
                    touched: true
                }
            }
        )
    };

    checkIfUser = () => {
        const name = this.state.email.value;
        const password = this.state.password.value;
        return name === LOGIN && password === PASSWORD;
    };

    handleSubmit= (event) => {
        event.preventDefault();
        const state = this.state;
        const isFormValid = this.props.fields.reduce((isValid, field) => state[field].valid && isValid, true);
        if (!this.checkIfUser()) {
            alert("Incorrect login or password!");
            return;
        }
        else if (!isFormValid) {
            alert("Incorrect login or password!");
            return;
        }
        this.props.validForm()
    };

    render() {
        return (
            <FormWrapper>
                <form method="POST" action="" onSubmit={this.handleSubmit} >
                    <fieldset>
                        <label htmlFor="email">Email</label>
                        <Input onChange={this.userInputHandler}
                               onBlur={this.onTouched}
                               required
                               name={'email'}
                               type={'text'}
                               className={'inp'}
                               value={this.state.email.value}
                               validators={[ValidatorService.mailValidator]}
                        />
                        {this.state.email.touched && <Error messages={this.state.email.msg}/>}
                        <label htmlFor="password">Password</label>
                        <Input onChange={this.userInputHandler}
                               onBlur={this.onTouched}
                               required
                               name={'password'}
                               type={'password'}
                               className={'inp'}
                               value={this.state.password.value}
                               validators={[ValidatorService.passwordValidator, ValidatorService.passwordLengthValidator]}
                        />
                        {this.state.password.touched && <Error messages={this.state.password.msg}/>}
                        <div className={'checkbox-wrapper'}>
                            <label htmlFor="remember">Remember me</label>
                            <input className={'remember-class'} type="checkbox" name="remember" id="remember"/>
                        </div>
                        <input className={'login'} type="submit" value="Login"/>
                    </fieldset>

                </form>
            </FormWrapper>
        );
    }
}


export default Form;