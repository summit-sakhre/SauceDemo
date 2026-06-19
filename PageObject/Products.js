const {expect} = require('@playwright/test')

class Products {
    constructor(page) {
        this.itemDesc = page.locator('.inventory_item_description')
        this.cartLink = page.locator('.shopping_cart_link')
        this.itemDescription = []
        this.itemPrice = []

    }


    async addItemsToCart(productName) {
        const itemBlock = await this.itemDesc
        const itemCount = await itemBlock.count()
        for (let i = 0; i < itemCount; i++) {
            const itemName = await itemBlock.nth(i).locator('.inventory_item_name').textContent()
            for (const item of productName) {
                if (itemName === item) {
                    this.itemDescription.push(await itemBlock.nth(i).locator('.inventory_item_desc').textContent())
                    this.itemPrice.push(await itemBlock.nth(i).locator('.inventory_item_price').textContent())
                    await itemBlock.nth(i).locator('[class*=btn_primary]').click()
                    await expect(itemBlock.nth(i).locator('[class*=btn_secondary]')).toHaveText('Remove')
                    break;
                }
            }
        }
    }

    async navigateToShoppingCartLink() {
        await this.cartLink.click()
    }

    getDescription(){
        return this.itemDescription
    }

    getPrice(){
        return this.itemPrice
    }
}
module.exports = { Products }