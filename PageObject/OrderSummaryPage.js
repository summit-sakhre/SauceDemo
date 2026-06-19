const { expect } = require('@playwright/test')

class OrderSummaryPage {
    constructor(page, products) {
        this.Products = products
        this.taxableAmount = page.locator('.summary_tax_label')
        this.totalAmount = page.locator('.summary_total_label')
        this.finishBtn = page.locator('#finish')
    }

    async getOrderSummaryDetails() {
        const tax = await this.taxableAmount.textContent()
        const taxOnlyNum = parseFloat(tax.replace('Tax: $', ''))
        const totalItemPrice = this.Products.getPrice().map(price => parseFloat(price.replace('$', ''))).reduce((sum, val) => sum + val, 0)
        const finalAmount = (taxOnlyNum + totalItemPrice).toFixed(2)
        await expect(this.totalAmount).toHaveText('Total: $' + finalAmount)
        await this.finishBtn.click()
    }
}
module.exports = { OrderSummaryPage }