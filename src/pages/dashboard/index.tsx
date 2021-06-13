import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NavBar from '@/components/navbar';
import Cards from '@/components/Cards';
import Status from '@/components/Status';
const Dashboard = () => {
    const router = useRouter()
    useEffect(() => {
        if (localStorage && localStorage.getItem('token') === null) {
            router.push('/');
        }
    }, [])
    return (
        <div>
            <NavBar />
            <div className="flex flex-row space-x-10 m-8 ">
                <Cards title="Status">
                    <Status />
                </Cards>
            </div>
        </div>
    )
}

export default Dashboard;