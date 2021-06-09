import { useState } from 'react';
interface Props {
    isDevelopmentMode: boolean | true
}

const RestartProxy = ({ isDevelopmentMode }: Props) => {
    const [isRestarting, setRestarting] = useState(false);
    const [message, setMessage] = useState();

    const restartProxy = async () => {
        const response = await fetch('/api/restart');
        const respJson = await response.json();
        console.log(respJson);
        setMessage(respJson.message);
    }
    if (isDevelopmentMode) {
        return (
            <div>
                <p>
                    Development mode
                </p>
            </div>
        )
    }
    return (
        <div>
            <button onClick={restartProxy}>
                Restart Proxy server
            </button>
            <p>
                Message:{message}
            </p>
        </div>
    )
}
export default RestartProxy
