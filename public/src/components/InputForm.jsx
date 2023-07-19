import React from 'react'

function InputForm({type,name,register,placeholder}) {
  return (
    <div>
        <div>
            <span>logo</span>
            <input type={type} name={name} register={register} placeholder={placeholder} />
        </div>
    </div>
  )
}

export default InputForm