import React, {useState} from 'react'
import './company.css'
const Company = () => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const submitForm =(e)=>{
        setEnteredTitle(e.target.value)
    }
    const submitHandler= (e)=>{
        e.preventDefault()
        setEnteredTitle('')
    } 
  return (
    <div className='style_components company'>
        <div className='company_div'>
            <div>
                <h1>
                Want tips & tricks to optimize your flow?
                </h1>
                <p>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div>
                <form onSubmit={submitHandler}>
                    <input type="email" value={enteredTitle} onChange={submitForm} placeholder="Enter Email"/>
                    <button type="submit">Notify Me</button>
                </form>
                <div>
                    <p className='form_paragraph'>We care about the protection of your data. Read our <span>private policy</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Company