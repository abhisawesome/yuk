import shell from 'shelljs';

const checkStatus = () => {
    try {
        const response = shell.exec('service nginx status');
        if (response.stdout.length !== 0) {
            return Promise.resolve({ status: true, message: response.stdout })
        } else {
            return Promise.resolve({ status: false, message: response.stderr })
        }
    } catch (error) {
        return Promise.resolve({ status: false, message: error.message || "Something went wrong !!" })
    }
}

export { checkStatus }