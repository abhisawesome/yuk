import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '@/components/navbar';

const Configure = () => {
    const router = useRouter();
    const isDevelopmentMode = process.env.NODE_ENV === 'development';

    useEffect(() => {
        if (localStorage && localStorage.getItem('token') === null) {
            router.push('/');
        }
    }, [])
    return (
        <div>
            <NavBar />
            <div className="flex items-center justify-center">
                Configure Proxy
            </div>
        </div>
    )
}

export default Configure;