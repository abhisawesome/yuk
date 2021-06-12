import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './styles.module.css';

export default () => {
    const router = useRouter()
    useEffect(() => {
        if (localStorage && localStorage.getItem('token') === null) {
            router.push('/');
        }
    }, [])
    return (
        <div>
            <ul className={styles.ul}>
                <li className={styles.li}><a className="active" href="#home">Home</a></li>
            </ul>
        </div>
    )
}