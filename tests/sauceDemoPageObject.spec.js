const { test, expect } = require('@playwright/test')
const { PageObjectManager } = require('../PageObject/PageObjectManager')

let dataSet

test.beforeEach(async ({ }, testInfo) => {
    const { testDataFile } = testInfo.project.use
    dataSet = JSON.parse(JSON.stringify(require(`../${testDataFile}`)))
})

test('Sauce Demo Practice', async ({ page }) => {

    const POManager = new PageObjectManager(page)
    const login = POManager.getLogin()
    const products = POManager.getProducts()
    const cartPage = POManager.getCartPage()
    const informationPage = POManager.getInformationPage()
    const orderSummaryPage = POManager.getOrderSummaryPage()

    await login.navigate()
    await expect(page).toHaveTitle('Swag Labs')
    await login.getLoginDetails()
    expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await products.addItemsToCart(dataSet.productName)
    await products.navigateToShoppingCartLink()
    await expect(page.locator('.inventory_item_name')).toHaveText(dataSet.productName)
    await expect(page.locator('.inventory_item_desc')).toHaveText(products.getDescription())
    await expect(page.locator('.inventory_item_price')).toHaveText(products.getPrice())
    await cartPage.getCheckout()
    await expect(page.locator('[class="title"]')).toHaveText('Checkout: Your Information')
    await informationPage.getUserDetails(dataSet.firstName, dataSet.lastName, dataSet.areaCode)
    await orderSummaryPage.getOrderSummaryDetails()
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')
    await expect(page.locator('.complete-text')).toContainText('pony')
})