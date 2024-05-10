import { driver } from '@wdio/globals'
export default class BasePage {
    private get footer() { return $('.footer-content-bottom')}

    async open () {
        return await driver.url('./')
    }

    async getCurrentUrl() {
        return await driver.getUrl()
    }

    async saveScreenshot(fileName: string) {
        await driver.pause(2000)
        return await driver.saveScreenshot(`./screenshot/${fileName}.png`)
    }

    async scrollToBottom() {
        await this.footer.scrollIntoView()
        await driver.pause(2000)
    }
}