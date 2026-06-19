class InformationPage {
    constructor(page) {
        this.firstName = page.getByPlaceholder('First Name')
        this.lastName = page.getByPlaceholder('Last Name')
        this.areaCode = page.getByPlaceholder('Zip/Postal Code')
        this.continueBtn = page.locator('input[type="submit"]')
    }

    async getUserDetails(firstName, lastName, areaCode) {
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.areaCode.fill(areaCode)
        await this.continueBtn.click()
    }
}
module.exports = { InformationPage }