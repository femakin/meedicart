import React, { Component } from 'react'

export default class Login extends Component {
  render() {

    const FormHeader = props => (
        <h2 id="headerTitle">{props.title}</h2>
    );

    const Form = props => (
        <div>
          <FormInput description="Email address" placeholder="Enter your Email address" type="text" />
          <FormInput description="Password" placeholder="Enter your Password" type="password"/>
          <FormButton title="Log in"/>
        </div>
     );

     const FormButton = props => (
        <div id="button" className="row">
          <button>{props.title}</button>
        </div>
      );
      
      const FormInput = props => (
        <div className="row">
          <label>{props.description}</label>
          <input type={props.type} placeholder={props.placeholder}/>
        </div>  
      );
      

    return (
       <div className="containerr">
            <div id="loginform">
        <FormHeader title="Please Login" />
        <Form />
      </div>
       </div>
    )
  }
}
