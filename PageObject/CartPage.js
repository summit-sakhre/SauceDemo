class CartPage{
    constructor(page){
        this.checkoutBtn = page.getByRole('button', { name: 'Checkout' })
    }

    async getCheckout(){
        await this.checkoutBtn.click()
    }
}
module.exports= {CartPage}