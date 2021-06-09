import RestartProxy from '../../components/Restart-Proxy';

const Restart = () => <RestartProxy isDevelopmentMode={process.env.NODE_ENV === 'development'}/>

export default Restart;