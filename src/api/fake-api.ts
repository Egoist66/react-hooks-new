export const fakeLogin = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        if(!email || !password) {
            const timer = setTimeout(() => {
                reject(new Error('Invalid email or password'))
                clearTimeout(timer)
            }, 1000)
        }
        const timer = setTimeout(() => {
            resolve({ email, password })
            clearTimeout(timer)
        }, 2000)
    })
}