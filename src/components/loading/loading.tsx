import styles from './styles.module.css';
interface Props {
    type?: string
}
const Loading = ({ type }: Props) => {
    switch (type) {
        case 'card': {
            return (
                <div className="animate-pulse flex space-x-4">
                    <div className="flex-1 space-y-4 py-1">
                        <div className="h-4 bg-blue-400 rounded w-3/4"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-blue-400 rounded"></div>
                            <div className="h-4 bg-blue-400 rounded w-5/6"></div>
                        </div>
                    </div>
                </div>
            )
        }
        default:
            return (
                <div className={styles.loader} />
            )
    }

}
export default Loading;