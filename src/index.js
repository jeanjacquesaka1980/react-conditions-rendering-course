import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

const UserGreeting = () => {
    return <h1 className="h1">Welcome back !</h1>;
}

const GuestGreeting = () => {
    return (
        <div>
            <h1 className="h1">Please sign up.</h1>;
        </div>
    )
}

const Greeting = props => {
    const isloggedIn = props.isloggedIn;

    // const varName = isLoggedIn ? <UserGreeting /> : <GuestGreeting />
    // return varName;

    // or 

    // const varName = (isLoggedIn && <UserGreeting />) || <GuestGreeting />
    // return varName;

    if (isloggedIn) {
        return <UserGreeting />;
    } else {
        return <GuestGreeting />;
    }
}

const Button = props => {
    return <button className="btn" onClick={props.onClick}>{props.logX}</button>;
}

const Result = props => {
return <h1 className="result">{props.result}</h1>
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            calcul: 0,
        }
    }

    handleLoginClick = () => {
        this.setState({
            isLoggedIn: true,
            calcul: this.state.calcul + 1,
        });
    }

    handleLogoutClick = () => {
        // console.log("handleLogoutClick");
        this.setState({
            isLoggedIn: false,
            calcul: this.state.calcul + 1,
        });
    }

    render() {

        // return {this.state.isLoggedIn ? 
        //     <Button onClick={this.handleLogoutClick} logX={"Logout"} /> 
        //     <Result result={this.count}/> : 
        //     <Button onClick={this.handleLoginClick} logX={"Login"} />
        //     <Result result={this.count}/>}

        if (this.state.isLoggedIn == true) {
            return (
                <div>
                    <Button onClick={this.handleLogoutClick} logX={"Logout"} />
                    <Result result={this.state.calcul} />
                </div>
            )
        } else {
            return (
                <div>
                    <Button onClick={this.handleLoginClick} logX={"Login"} />
                    <Result result={this.state.calcul} />
                </div>
            )
        }
        // "if (this.state.isLoggedIn) {
        //     // button=  <button className="btn" onClick={this.handleLogoutClick}>Logout</button>;
        //     button = <Button onClick={this.handleLogoutClick} logX={"Logout"}/>
        // } else {
        //     // button = <button className="btn" onClick={this.handleLoginClick}>Login</button>;
        //     button = <Button onClick={this.handleLoginClick} logX={"Login"}/>
        // }"
        // const button = <button onClick={this.handleLoginClick}>Login</button>;
        // const button2 = <button onClick={this.handleLogoutClick}>Logout</button>;
        // if i give parameter i should make anonymous function () => handleLoginClick()
    }
}

ReactDOM.render(<LoginControl />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
