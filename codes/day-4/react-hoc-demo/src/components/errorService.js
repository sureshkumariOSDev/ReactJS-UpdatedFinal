const logError = (error, errorInfo) => {
    return fetch('', { error: error, errorInfo: errorInfo })
}
export default logError;