class Login {
    constructor(page) {
        this.page = page
        this.userText = page.locator('#login_credentials')
        this.passwordText = page.locator('.login_password')
        this.userName = page.locator('#user-name')
        this.password = page.locator('#password')
        this.loginBtn = page.locator('#login-button')
    }

    async navigate(url) {
        await this.page.goto('/')
    }

    async getLoginDetails() {
        const userText = await this.userText.innerText()
        const userName = userText.split('\n').map(t => t.trim()).filter(t => t && !t.includes('Accepted'))[0]
        const passText = await this.passwordText.innerText()
        const password = passText.split('\n').map(t => t.trim()).filter(t => t && !t.includes('Password'))[0]
        await this.userName.fill(userName)
        await this.password.fill(password)
        await this.loginBtn.click()
        return {userName, password}
    }

}
module.exports = { Login }