import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '@/components/Navbar';

export default () => {
    const router = useRouter()
    useEffect(() => {
        if (localStorage && localStorage.getItem('token') === null) {
            router.push('/');
        }
    }, [])
    return (
      <div>
           <NavBar />
      </div>
    )
}