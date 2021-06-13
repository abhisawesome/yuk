import { useState } from 'react';
import Retry from './retry';
import Loading from '@/components/loading';

interface Props {
    isDevelopmentMode?: boolean | true
}

const RestartProxy = ({ isDevelopmentMode }: Props) => {
    const [isRestarting, setRestarting] = useState(false);
    const [message, setMessage] = useState("");

    const restartProxy = async () => {
        setRestarting(true);
        try {
            const response = await fetch('/api/restart', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: localStorage.getItem('token') || "" })
            });
            const respJson = await response.json();
            setMessage(respJson.message);
        } catch (error) {
            setMessage(error.message || "")
        }
        setRestarting(false);
    }
    if (isDevelopmentMode) {
        return (
            <div className="items-center justify-center p-5 bg-gray-100">
                Development mode
            </div>
        )
    }
    if (isRestarting) {
        return <Loading type="card" />
    }
    return (
        <div>
            <div className="flex items-center justify-center mt-5">
                <button className="h-10 w-10" onClick={restartProxy}>
                    <Retry />
                </button>
            </div>
            {message && message.length !== 0 && (
                <p className="p-5 bg-gray-100">
                    {message}
                </p>
            )}
        </div>
    )
}
export default RestartProxy
