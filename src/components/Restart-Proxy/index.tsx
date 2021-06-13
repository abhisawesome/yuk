import { useState } from 'react';
import Retry from './retry';
import Loading from '@/components/Loading';

interface Props {
    isDevelopmentMode?: boolean | true
}

const RestartProxy = ({ isDevelopmentMode }: Props) => {
    const [isRestarting, setRestarting] = useState(false);
    const [message, setMessage] = useState(undefined);

    const restartProxy = async () => {
        setRestarting(true);
        try {
            const response = await fetch('/api/restart');
            const respJson = await response.json();
            console.log(respJson);
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
            <p className="p-5 bg-gray-100">
                {message}
            </p>
        </div>
    )
}
export default RestartProxy
