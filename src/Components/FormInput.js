import React, { useEffect, useState } from "react";
const FormInput = ({ name, type, className, required, placeholder, id, value, setValue }) => {
  const [error, setError] = useState([]);
  const [focused, setFocused] = useState(false)

  const validate = () => {
    if(focused){
      if(required){
        if(value === ""){
          setError(["This field is required"])
          return
        }else{
          setError([])
        }
      }
      if(type === "email"){
        // eslint-disable-next-line
        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)){
          setError([])
          return
        }else{
          setError(["invalid email address"])
        }
      }
    }
  }

  useEffect(() => {
    validate()
    // eslint-disable-next-line
  }, [value])

  return (
    <>
      <input
        type={type}
        className={`${className} ${focused ? "isFocused" : ""}`}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required={required}
        placeholder={placeholder}
        name={name}
        id={id}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <p className="error-msg">{error.length > 0 ? error : ""}</p>
    </>
  );
};
export default FormInput;
