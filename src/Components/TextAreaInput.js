import React, { useState, useEffect } from "react";

const TextAreaInput = ({ name, placeholder, required, form, id, value, setValue }) => {
  const [ error, setError ] = useState([]);
  const [focused, setFocused] = useState(false)

  const validate = () => {
    if(focused){
      if(required){
        if(value === ""){
          setError(["This field is required"])
        }else{
          setError([])
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
      <textarea
        name={name}
        cols="30"
        rows="10"
        placeholder={placeholder}
        className={`textArea ${focused ? 'isFocused' : ""}`}
        required={required}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        form={form}
        id={id}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      ></textarea>
      <p className="error-msg">{error.length > 0 ? error : ""}</p>
    </>
  );
};

export default TextAreaInput;
