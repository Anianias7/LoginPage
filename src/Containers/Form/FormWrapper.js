import styled from 'styled-components'

export default styled.div `

    fieldset {   
        display: flex;
        border: 0px;
        flex-direction: column;
        color: white;
        font-weight: bold;
    }
    
    .checkbox-wrapper {
        display: flex;
        flex-direction: row;
    }
    
    .login {
        margin: auto;
        margin-top: 8%;
        width: 40%;
        padding: 2%;
        border-radius: 5px;
        background-color: #2196F3;
        border: none;
        color: white;
        font-weight: bold;
    }
    
   
    label {
        width: 40%;
        height: 30%;
        margin: 3%; 
        
    }
    
    #remember {
        margin: 3%;
        padding: 3%;
    }
    
 
    .inp {
        padding: 2%;
        width: 60%;
        height: 30%;
        margin: 2%;
        border: 1px solid #DCDCDC;
    }
`