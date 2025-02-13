import React from 'react';  
import ReactDOM from 'react-dom';  
import styled from 'styled-components';  
  
class App extends React.Component {  
  render() {  
    const Div= styled.div`  
            margin: 20px;  
            border: 5px dashed green;  
            &:hover {  
            background-color: ${(props) => props.hoverColor};  
            }  
            `;  
    const Title = styled.h1`  
            font-family: Arial;  
            font-size: 35px;  
            text-align: center;  
            color: palevioletred;  
            `;  
    const Paragraph = styled.p`  
            font-size: 25px;  
            text-align: center;  
            background-Color: lightgreen;  
            `;  
    return (  
       <div>            
            <Title>Styled Components Example</Title>  
            <p></p>  
            <Div hoverColor="Orange">  
                 <Paragraph>Hello</Paragraph>  
            </Div>  
        </div>  
    );  
  }  
}  
export default App;  
