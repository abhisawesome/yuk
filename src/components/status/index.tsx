import { useEffect, useState } from 'react'
import Loading from '../Loading';

const Status = () => {
    const [isLoading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/status');
            const respJson = await response.json();
            if (respJson.status) {
                setStatusMessage('Success :' + respJson.message)
            } else {
                setStatusMessage('Error :' + respJson.message)
            }
            // setStatusMessage(respJson.message)
        } catch (error) {
            setStatusMessage(error.message || "Something went wrong")
        }
        setLoading(false)
    }
    useEffect(() => {
        if (process.env.NODE_ENV === 'development') {
            setStatusMessage('Development mode');
        } else {
            fetchData()
        }
    }, [])
    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h1>Status</h1>
            <p>{statusMessage}</p>
        </div>
    )
}

export default Status