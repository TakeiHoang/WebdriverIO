import BasePage from "./base.page.ts"

class GoogleResult extends BasePage{
    // Elements
    private get lnk_Elfie() { return $('a[href="https://www.elfie.co/"]') }
        // await lnk_Elfie.isClickable()
        // await lnk_Elfie.click()
    
    // Methods
    async clickOnElfieLink() {
        await this.lnk_Elfie.isDisplayed()
        await this.lnk_Elfie.click()
    }
}
export default new GoogleResult()