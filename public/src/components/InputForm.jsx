import React from 'react'
import styled from "styled-components";


function InputForm({type,name,register,placeholder}) {
  return (
    <containerInput>
        <div>
            <span>logo</span>
            <input type={type} name={name} register={register} placeholder={placeholder} />
        </div>
    </containerInput>
  )
}

export default InputForm;

const containerInput = styled.div`
width: 100%;
padding: 12px
border-radius: 8px
gap: 8px;
background: #F2F2F2;
`;

