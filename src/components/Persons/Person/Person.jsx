import React from 'react';
import styled from "styled-components";

const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
                
    @media (max-width: 768px) {
        width: 40%;
        background-color: lightblue;
    }
    `;

const Person = ({id, age, name, changed, removed, children}) => {
    return (
        <StyledDiv>
            <p>
                I'm {name} and I'm {age} years
            </p>
            {
                children &&
                <p>{children}</p>
            }
            <input
                type={"text"}
                onChange={(event) => changed(event, id)}
                value={name}
            />
            <button onClick={() => removed()}>Remove</button>
        </StyledDiv>
    );
}

export default Person;