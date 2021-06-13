import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '@/components/Navbar';
import Cards from '@/components/Cards';
import Status from '@/components/Status';
import RestartProxy from '@/components/Restart-Proxy';

const Dashboard = () => {
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
                Home
            </div>
            <div className="flex flex-row space-x-10 m-8 ">
                <Cards title="Server Status">
                    <Status isDevelopmentMode={isDevelopmentMode} />
                </Cards>
                <Cards title="Restart Proxy Server">
                    <RestartProxy isDevelopmentMode={isDevelopmentMode} />
                </Cards>
            </div>
        </div>
    )
}

export default Dashboard;