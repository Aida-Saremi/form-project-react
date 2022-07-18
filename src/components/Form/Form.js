import React from "react";
import "./Form.css";

export default class App extends React.Component {

    constructor() {
        super()

        this.state = {
            firstNameData: '',
            lastNameData: '',
            emailData: '',

            submitted: false,

            allValid: false,
        }

        this.handleSubmit=this.handleSubmit.bind(this);
    }
/*---------------------------------------functions for events-------------------------------*/ 
    handleSubmit(event){
         this.setState({
            submitted:true
         })
        event.preventDefault()
        if(this.state.firstNameData.length>0 && this.state.lastNameData.length>0 && this.state.emailData.length>0 ){

            this.setState({
                allValid:true
             })


            setTimeout(()=> {
                this.setState({
                    allValid:false
                 })

            },7000);
            
          }
    }


    
    userNameHandler(event) {
        console.log(event);
        this.setState({
            firstNameData: event.target.value
        })
    }

    LastNameHandler(event) {
        this.setState({
            lastNameData: event.target.value
        })
    }


    EmailHandler(event) { 
        this.setState({
            emailData: event.target.value
        })
    }

    



    render() {
        return (
            <div className="form-container">
                <form className="register-form" autoComplete="off" onSubmit={this.handleSubmit}>

                    {/*show the success message */}
                     {this.state.submitted&&this.state.allValid&&(
                        <div className="success-message">Success! Thank you for registering</div>

                      )}
                           
                    
                    <input
                        id="first-name"
                        className="form-field"
                        type="text"
                        placeholder="First Name"
                        name="firstName"

                        value={this.state.firstNameData} onChange={(event) => this.userNameHandler(event)} 
                
                        
                    />
                    {this.state.submitted && this.state.firstNameData.length===0 && (

                       <span id="first-name-error">Please enter a first name</span>
                    )}
                
                    <input
                        id="last-name"
                        className="form-field"
                        type="text"
                        placeholder="Last Name"
                        name="lastName"
                        value={this.state.lastNameData} onChange={(event) => this.LastNameHandler(event)} 
                    />

                        {this.state.submitted && this.state.lastNameData.length===0 && (

                           <span id="first-name-error">Please enter a last name</span>
                         )}

                   
                    <input
                        id="email"
                        className="form-field"
                        type="text"
                        placeholder="Email"
                        name="email"
                        value={this.state.emailData} onChange={(event) => this.EmailHandler(event)} 
                    />
                        {this.state.submitted && this.state.emailData.length===0 && (

                        <span id="first-name-error">Please enter an email address</span>
                       )}

                
                    <button className="form-field" type="submit" >
                        Register
                    </button>
                </form>
            </div>

        )
    }
}
