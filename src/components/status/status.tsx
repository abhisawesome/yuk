import { useEffect, useState } from 'react'
import Loading from '../loading';
import Retry from './retry';

interface Props {
    isDevelopmentMode?: boolean | true
}

const Status = ({ isDevelopmentMode }: Props) => {
    const [isLoading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("");
    const [retry, setRetry] = useState(false);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/status', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: localStorage.getItem('token') || "" })
            });
            const respJson = await response.json();
            if (respJson.status) {
                setStatusMessage('Success :' + respJson.message);
            } else {
                setStatusMessage('Error :' + respJson.message);
            }
            // setStatusMessage(respJson.message)
        } catch (error) {
            setStatusMessage(error.message || "Something went wrong");
        }
        setLoading(false);
    }
    const retryTab = () => {
        setRetry(!retry)
    }
    useEffect(() => {
        if (isDevelopmentMode) {
            setStatusMessage('Development mode');
        } else {
            fetchData();
        }
    }, [retry])
    if (isLoading) {
        return <Loading type="card" />
    }
    return (
        <div className="flex flex-col">
            <div>
                <button className="float-right" onClick={retryTab}>
                    <div className="flex h-5 w-5 float-right" >
                        <Retry />
                    </div>
                </button>
                <span className="flex h-3 w-3 float-right">
                    <span className="animate-ping  relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>

            </div>
            {statusMessage && statusMessage.length !== 0 && (
                <div className="p-5 bg-gray-100">
                    <p>{statusMessage}</p>
                </div>
            )}
        </div>
    )
}

export default Status