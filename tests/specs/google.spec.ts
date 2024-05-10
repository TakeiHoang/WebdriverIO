import googlePage from '../pageobjects/google.page.ts'
import googleResultPage from '../pageobjects/google-result.page.ts'
import elfiePage from '../pageobjects/elfie.page.ts'

describe('Android test', () => {
    beforeEach(async () => [
        await googlePage.open()
    ])
    afterEach(async () => {
        await driver.deleteAllCookies()
    })

    it('Google search', async () => {   
        // Search 'Elfie'
        expect(await googlePage.getCurrentUrl()).toContain('google.com')
        await googlePage.searchWithElfieValue()

        // Select search suggestion
        await googlePage.clickOnFirstSearchResultSuggestion()

        // Click on first search result to Elfie
        await googleResultPage.clickOnElfieLink()
        
        // Reject all cookie
        await elfiePage.clickRejectCookie()

        // Verify the Logo should be displayed and capture image at this step.
        expect(await elfiePage.isLogiDisplayed()).toBe(true)
        await elfiePage.saveScreenshot('elfie-logo-screenshot')

        // Click on Hamburger menu then verify that "hamburger" menu change to "X" button and capture image at this step.
        await elfiePage.clickonHeaderMenu()
        expect(await elfiePage.isXButtonDisplayed()).toBe(true)
        await elfiePage.saveScreenshot('elfie-hamburger-opened-screenshot')
        await elfiePage.clickonHeaderMenu()
        // Scroll into the bottom and verify the text "Copyright 2023 Elfie Pte. Ltd." and capture image at this step.
        await elfiePage.scrollToBottom()
        // Assert that the copyright text matches the expected pattern
         expect(await elfiePage.getCopyrightText()).toContain('Copyright © '+  new Date().getFullYear() +' Elfie Pte. Ltd.');
    })
})