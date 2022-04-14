import {FormEvent, useState} from "react";

import {registerNewUser} from "../service/apiService";
import {useAuth} from "../auth/AuthProvider";

export default function LoginForm(){

    const [registerEmail, setRegisterEmail] = useState('')
    const [registerPasswordOne, setRegisterPasswordOne] = useState('')
    const [registerPasswordTwo, setRegisterPasswordTwo] = useState('')
    const [error, setError] = useState('')

    const auth = useAuth()



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
        <div className={'registerForm'}>

            <h2>Register</h2>
            <form onSubmit={Register}>
                <input type="text" placeholder={'Email'} value={registerEmail} onChange={ev => setRegisterEmail(ev.target.value)}/>
                <input type='password' placeholder={'Password'} value={registerPasswordOne} onChange={ev => setRegisterPasswordOne(ev.target.value)}/>
                <input type='password' placeholder={'Passwort repeat'} value={registerPasswordTwo} onChange={ev => setRegisterPasswordTwo(ev.target.value)}/>
                <button type={'submit'}>Register</button>
            </form>
            {error && <h2>{error}</h2>}
        </div>
    )
}
