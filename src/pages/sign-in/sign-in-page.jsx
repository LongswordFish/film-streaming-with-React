import React from "react";

import FormInput from "../../components/form-input/Form-input";
import CustomButton from "../../components/custom-button/custom-button.component";

import { selectError } from "../../redux/user/user.selectors";
import { signInStart } from "../../redux/user/user.actions";


import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './sign-in-page.styles.scss';

class SignInPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            username:'',
            password:'',
            error:{}
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.error!=null){
            this.setState({error:nextProps.error})
        }
    }

    handleSubmit= async (event)=>{
        event.preventDefault();
        const {username, password} = this.state;
        const {signInStart} = this.props;
        signInStart(username,password);
    }

    handleChange=event=>{
        const {value,name} = event.target;

        this.setState({[name]:value});
    }


    render(){
        const {error} = this.state;
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span className="hint">Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                     {error.username?<p className="error-message">{error.username}</p>:null}
                    <FormInput name='username' value={this.state.username} type='email' required handleChange={this.handleChange} label='email'/>
                    {error.password?<p className="error-message">{error.password}</p>:null}
                    <FormInput name='password' value={this.state.password} type='password' required handleChange={this.handleChange} label='password'/>
                    
                    <div className="buttons">
                        <CustomButton type='submit' backgroundColor={"skyblue"}> SIGN IN </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps=state=>({
    error:selectError(state)
});

const mapDispatchToProps = dispatch =>({
    signInStart:(username,password)=>dispatch(signInStart({username,password}))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignInPage);