import shell from 'shelljs';

const executeCommand = (command: string) => {
    try {
        const response = shell.exec(command);
        if (response.stdout.length !== 0) {
            return Promise.resolve({ status: true, message: response.stdout, meta: response })
        } else {
            return Promise.resolve({ status: false, message: response.stderr, meta: response })
        }
    } catch (error) {
        return Promise.resolve({ status: false, message: error.message || "Something went wrong !!" })
    }
}

export { executeCommand };