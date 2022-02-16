import React from "react";

import FormInput from "../../components/form-input/Form-input";
import CustomButton from "../../components/custom-button/custom-button.component";

import { selectError } from "../../redux/user/user.selectors";
import { signUpStart } from "../../redux/user/user.actions";

import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './sign-up-page.styles.scss';

class SignUpPage extends React.Component{

    constructor(props){
        super(props);
        this.state={
            username:'',
            fullName:'',
            password:'',
            confirmPassword:'',
            error:{}
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.error!=null){
                this.setState({error:nextProps.error})
        }
    }

    handleSubmit=async event=>{
        event.preventDefault();
        const {signUpStart} = this.props;
        const {username,fullName, password, confirmPassword} = this.state;
        if(password!== confirmPassword){
            alert("passwords don't match!");
            return;
        }
        signUpStart({username,password,confirmPassword,fullName});
    }

    handleChange=event=>{
        const {name,value} = event.target;
        this.setState({[name]:value});
    }

    render(){

        const {username,fullName, password, confirmPassword,error} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span className="hint">Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    {error.fullName?<p className="error-message">{error.fullName}</p>:null}
                    <FormInput type='text' name='fullName' value={fullName} onChange={this.handleChange} label='Display Name' required></FormInput>
                    {error.username?<p className="error-message">{error.username}</p>:null}
                    <FormInput type='email' name='username' value={username} onChange={this.handleChange} label='Email' required></FormInput>
                    {error.password?<p className="error-message">{error.password}</p>:null}
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required></FormInput>
                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange} label='ConfirmedPassword' required></FormInput>
                    {error.success?<p className="good-message">{error.success}</p>:null}
                    
                    <div className="button-wrapper">
                        <CustomButton type='submit' backgroundColor={"skyblue"}>SIGN UP</CustomButton>
                        <Link to="/signIn"><CustomButton  backgroundColor={"lightgreen"}>SIGN IN</CustomButton></Link>
                    </div>

                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    signUpStart:newUserInfo=>dispatch(signUpStart(newUserInfo))
});

const mapStateToProps=state=>({
    error:selectError(state)
});

export default connect(mapStateToProps,mapDispatchToProps)(SignUpPage);
