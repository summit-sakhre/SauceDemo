const { Login } = require('../PageObject/Login')
const { Products } = require('../PageObject/Products')
const { CartPage } = require('../PageObject/CartPage')
const { InformationPage } = require('../PageObject/InformationPage')
const { OrderSummaryPage } = require('../PageObject/OrderSummaryPage')

class PageObjectManager {
    constructor(page) {
        this.page = page
        this.login = new Login(page)
        this.products = new Products(page)
        this.cartPage = new CartPage(page)
        this.informationPage = new InformationPage(page)
        this.orderSummaryPage = new OrderSummaryPage(page, this.products)
    }

    getLogin() {
        return this.login
    }

    getProducts() {
        return this.products
    }

    getCartPage() {
        return this.cartPage
    }

    getInformationPage() {
        return this.informationPage
    }

    getOrderSummaryPage() {
        return this.orderSummaryPage
    }
}
module.exports = { PageObjectManager }