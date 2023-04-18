import React, { useRef } from 'react'
import "./create.css"


const Create = ({ setEmployees, employees }) => {
  const nameRef = useRef()
  const lastnameRef = useRef()
  const positionRef = useRef()

  function handleSubmit(event) {
    event.preventDefault()
    const name = nameRef.current.value;
    const lastname = lastnameRef.current.value;
    const position = positionRef.current.value;
    const newMember = {
      id: 3,
      name,
      lastname,
      position
    };
    setEmployees([...employees, newMember]); 
    nameRef.current.value =""
    lastnameRef.current.value =""
    positionRef.current.value =""
  }

  return (
    <div>
        <span className='create'>Create User Here</span>
        <br />
        <form className='inputContainer' onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" ref={nameRef}/>
            <input type="text" placeholder="Last Name" ref={lastnameRef}/>
            <input type="text" placeholder="Positon" ref={positionRef}/>
            <button type="submit" className='save'>Save</button>
        </form>
    </div>
  )
}

export default Create