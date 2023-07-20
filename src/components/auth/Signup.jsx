import React from 'react'

export const Signup = () => {
  return (
    <div>
      <label className="firstName" for="firstName">First Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="First Name"/>
              
            
                  <label className="lastName"for="lastName">Last Name </label>
                  <input  type="text" name="" id="lastName"  className="form__input"placeholder="LastName"/>
            
                  <label className="email" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Email"/>
           
            
                  <label className="password" for="password">Password </label>
                  <input className="form__input" type="password"  id="password" placeholder="Password"/>
            
             
                  <label className="confirmPassword" for="confirmPassword">Confirm Password </label>
      <input className="form__input" type="password" id="confirmPassword" placeholder="Confirm Password" />
      
          
      
              <button type="submit" class="btn">Register</button>
    </div>

  )
}
