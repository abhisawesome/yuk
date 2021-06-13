import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '@/components/navbar';
import Cards from '@/components/cards';
import Status from '@/components/status';
import RestartProxy from '@/components/restart-proxy';
import { IS_DEVELOPING } from '@/constants/index';

const Dashboard = () => {
    const router = useRouter();
    const isDevelopmentMode = IS_DEVELOPING;

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