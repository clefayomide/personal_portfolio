import React from 'react'

const Btn = ({className, innerText, disabled}) => {
    return (
        <>
           <button className={className} disabled={disabled}>{innerText}</button> 
        </>
    )
}

export default Btn
