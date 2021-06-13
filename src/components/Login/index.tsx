import { useState } from 'react';
import { useRouter } from 'next/router';
import * as  styles from './styles.module.css';

const Login = () => {
    const [isLoading, setLoading] = useState(false);
    const [data, setData] = useState({});
    const router = useRouter()

    // handle form value change
    const onChangeInputHandler = (event: any) => {
        setData({ ...data, [event.target.id]: event.target.value })
    }
    // handle submit
    const onSubmitHandler = async (event: any) => {
        setLoading(true);
        event.preventDefault();
        try {
            const response = await fetch('/api/auth', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
            const respJson = await response.json();
            if (respJson.status && respJson.token) {
                localStorage.setItem('token', respJson.token);
                router.push('/dashboard');
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
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
                        disabled={isLoading}
                        required
                        className={styles.input}
                        type="email"
                        id="email"
                        placeholder="Enter email"
                        onChange={onChangeInputHandler}
                    />
                    <label>Password</label>
                    <input
                        disabled={isLoading}
                        required
                        className={styles.input}
                        type="password"
                        id="password"
                        placeholder="Enter password"
                        onChange={onChangeInputHandler}
                    />
                    <button
                        disabled={isLoading}
                        className={styles.submit}
                        type="submit"
                        onClick={onSubmitHandler}
                    >
                        {isLoading ? 'Loading ...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;