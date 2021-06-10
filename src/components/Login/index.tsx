import { useState } from 'react';
import * as  styles from './styles.module.css';

const Login = () => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const [password, setPassword] = useState(undefined);

    // handle form value change
    const onChangeInputHandler = (event: any) => {
        setData({ ...data, [event.target.id]: event.target.value })
    }
    // handle submit
    const onSubmitHandler = (event: any) => {
        event.preventDefault();
        console.log(data);
    }

    return (
        <div>
            <div className={styles.center}>
                <h1> Login </h1>
            </div>
            <div className={styles.loginForm}>
                <form >
                    <label>Email</label>
                    <input
                        required
                        className={styles.input}
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        onChange={onChangeInputHandler}
                    />
                    <label>Password</label>
                    <input
                        required
                        className={styles.input}
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        onChange={onChangeInputHandler}
                    />
                    <button
                        className={styles.submit}
                        type="submit"
                        onClick={onSubmitHandler}
                    >
                        Login
                     </button>
                </form>
            </div>
        </div>
    )
}

export default Login;