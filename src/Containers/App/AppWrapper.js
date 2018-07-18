import styled from 'styled-components'

export default styled.div `
    visibility: ${props => props.visibility? 'visible' : 'hidden'};
    background: inherit;
    max-width: 50%;
    height: 520px;
    margin: auto;
    margin-top: 60px;
    border: 1px solid white;
    border-radius: 20px;
    overflow: hidden;
    padding-bottom: 1%;
   
`