
import { executeCommand } from './execute-command';

// check nginx status
const checkStatus = () => executeCommand('service nginx status')
// restart nginx
const restartLoad = () => executeCommand('service nginx restart')

export { checkStatus,restartLoad }