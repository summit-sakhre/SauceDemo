const { test, expect } = require('@playwright/test')
const { url } = require('node:inspector')
const { title } = require('node:process')

test('Sauce Demo Practice', async ({ page }) => {

    let userName
    let password
    const productName = ['Sauce Labs Bike Light', 'Sauce Labs Fleece Jacket']
    let itemDescription = []
    let itemPrice = []

    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveTitle('Swag Labs')
    const userText = await page.locator('#login_credentials').innerText()
    userName = userText.split('\n').map(t => t.trim()).filter(t => t && !t.includes('Accepted'))[0]
    const passText = await page.locator('.login_password').innerText()
    password = passText.split('\n').map(t => t.trim()).filter(t => t && !t.includes('Password'))[0]
    await page.locator('#user-name').fill(userName)
    await page.locator('#password').fill(password)
    await page.locator('#login-button').click()
    expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    const itemBlock = await page.locator('.inventory_item_description')
    const itemCount = await itemBlock.count()
    for (let i = 0; i < itemCount; i++) {
        const itemName = await itemBlock.nth(i).locator('.inventory_item_name').textContent()
        for(const item of productName){
            if (itemName === item) {
                itemDescription.push(await itemBlock.nth(i).locator('.inventory_item_desc').textContent())
                itemPrice.push(await itemBlock.nth(i).locator('.inventory_item_price').textContent())
                await itemBlock.nth(i).locator('[class*=btn_primary]').click()
                await expect(itemBlock.nth(i).locator('[class*=btn_secondary]')).toHaveText('Remove')
                break;
            }
        }
    }
    await page.locator('.shopping_cart_link').click()
    await expect(page.locator('.inventory_item_name')).toHaveText(productName)
    await expect(page.locator('.inventory_item_desc')).toHaveText(itemDescription)
    await expect(page.locator('.inventory_item_price')).toHaveText(itemPrice)
    await page.getByRole('button', { name: 'Checkout' }).click()
    await expect(page.locator('[class="title"]')).toHaveText('Checkout: Your Information')
    await page.getByPlaceholder('First Name').fill('Automation')
    await page.getByPlaceholder('Last Name').fill('Practice')
    await page.getByPlaceholder('Zip/Postal Code').fill('000000')
    await page.locator('input[type="submit"]').click()
    const tax = await page.locator('.summary_tax_label').textContent()
    const taxOnlyNum = parseFloat(tax.replace('Tax: $', ''))
    const totalItemPrice = itemPrice.map(price => parseFloat(price.replace('$', ''))).reduce((sum,val) => sum + val, 0)
    const finalAmount = (taxOnlyNum + totalItemPrice).toFixed(2)
    await expect(page.locator('.summary_total_label')).toHaveText('Total: $'+finalAmount)
    await page.locator('#finish').click()
    await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!')
    await expect(page.locator('.complete-text')).toContainText('pony')
})