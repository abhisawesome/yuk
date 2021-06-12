import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default () => {
    const router = useRouter()
    useEffect(() => {
        if (localStorage && localStorage.getItem('token') === null) {
            router.push('/');
        }
    }, [])
    return <div>This is from dashboard</div>
}