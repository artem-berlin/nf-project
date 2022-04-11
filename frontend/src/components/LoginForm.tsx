import {FormEvent, useState} from "react";
import {registerNewUser} from "../service/apiService";
import {useAuth} from "../auth/AuthProvider";


export default function LoginForm(){
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPasswordOne, setRegisterPasswordOne] = useState('')
    const [registerPasswordTwo, setRegisterPasswordTwo] = useState('')
    const [error, setError] = useState('')

    const auth = useAuth()


    const Login = (event : FormEvent) => {
        event.preventDefault()
        setError('')
        auth.login(loginEmail, loginPassword)
            .catch(er => setError(er.message))
    }

    const Register = (event : FormEvent) => {
        event.preventDefault()
        setError('')
        if (!(registerPasswordOne===registerPasswordTwo)){
            setError('Pass is not equal')
        } else {
            registerNewUser({email: registerEmail, password: registerPasswordOne, passwordAgain: registerPasswordTwo})
                .catch(er => setError(er.message))
        }
    }


    return(
        <div className={'loginForm'}>
            <h4>Login</h4>
            <form onSubmit={Login}>
                <input type="text" placeholder={'LoginEmail'} value={loginEmail} onChange={ev => setLoginEmail(ev.target.value)}/>
                <input type='password' placeholder={'Password'} value={loginPassword} onChange={ev => setLoginPassword(ev.target.value)}/>
                <button type={'submit'}>Login</button>
            </form>
            <h4>Register</h4>
            <form onSubmit={Register}>
                <input type="text" placeholder={'Email'} value={registerEmail} onChange={ev => setRegisterEmail(ev.target.value)}/>
                <input type='password' placeholder={'Password'} value={registerPasswordOne} onChange={ev => setRegisterPasswordOne(ev.target.value)}/>
                <input type='password' placeholder={'Passwort repeat'} value={registerPasswordTwo} onChange={ev => setRegisterPasswordTwo(ev.target.value)}/>
                <button type={'submit'}>Register</button>
            </form>
            {error && <h4>{error}</h4>}
        </div>
    )
}