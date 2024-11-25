import { useState } from 'react'
import './Form.css'

function Form({ addIdea }) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  function submitIdeas(event) {
    event.preventDefault()
    const newIdea = {
      id: Date.now(),
      title,
      description
    }
    addIdea(newIdea)
    clearInput()
  }
  
  function clearInput() {
    setTitle("")
    setDescription("")
  }
  console.log("I'm a form")
  return (
  <form onSubmit={ submitIdeas }>
    <input
      type = 'text'
      placeholder = 'Title'
      name = 'title'
      value = {title}
      onChange = {event =>
        setTitle(event.target.value)
      }
  />
  
  <input
    type = 'text'
    placeholder = 'Description'
    name = 'description'
    value = {description}
    onChange = {event =>
      setDescription(event.target.value)
    }
  />

  <button>SUBMIT</button>    
    </form>
  )
}

export default Form