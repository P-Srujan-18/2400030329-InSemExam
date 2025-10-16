import React, { useState, useEffect } from 'react'

function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [isFormValid, setIsFormValid] = useState(false)

  // validate email
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!value) return "Email is required"
    if (!regex.test(value)) return "Invalid email address"
    return ""
  }

  // validate password
  const validatePassword = (value) => {
    if (!value) return "Password is required"
    if (value.length < 6) return "Password must be at least 6 characters"
    return ""
  }

  useEffect(() => {
    setEmailError(validateEmail(email))
    setPasswordError(validatePassword(password))
    setIsFormValid(!validateEmail(email) && !validatePassword(password))
  }, [email, password])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isFormValid) {
      alert(`Form submitted!\nEmail: ${email}\nPassword: ${password}`)
    }
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{
        display: 'flex', 
        flexDirection: 'column', 
        gap: '15px',
        width: '300px'
      }}
    >
      <div>
        <label>Email</label><br />
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
        {emailError && <p style={{ color: 'red', fontSize: '12px' }}>{emailError}</p>}
      </div>

      <div>
        <label>Password</label><br />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        {passwordError && <p style={{ color: 'red', fontSize: '12px' }}>{passwordError}</p>}
      </div>

      <button type="submit" disabled={!isFormValid}>
        Submit
      </button>
    </form>
  )
}

export default Form
