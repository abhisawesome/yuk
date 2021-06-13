import { executeCommand } from './execute-command';

// check nginx status
const checkStatus = (token: string) => executeCommand('service nginx status', token)
// restart nginx
const restartLoad = (token: string) => executeCommand('service nginx restart', token)

export { checkStatus, restartLoad }