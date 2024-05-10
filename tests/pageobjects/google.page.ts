import BasePage from "./base.page.ts"

class GooglePage extends BasePage {
    // Elements
    private get txt_SearchBox() { return $('form textarea')}
    private get lbl_SearchListResult() { return $('span=elfie')}

    // Methods
    async searchWithElfieValue() {
        await this.txt_SearchBox.isDisplayed()
        await this.txt_SearchBox.setValue('Elfie')
    }

    async clickOnFirstSearchResultSuggestion() {
        //const lbl_SearchListResult = await $('ul[role="listbox"] li:first-child')
        await this.lbl_SearchListResult.isClickable()
        await this.lbl_SearchListResult.click()
    }
}

//export default new GooglePage()
export default new GooglePage()