import BasePage from "./base.page.ts";

class ElfiePage extends BasePage {
    private get btn_RejectCookie() {return $('aria/Reject All')}
    private get img_ElfieLogo() { return $('img.header-logo')}
    private get btn_HamburgerMenu() { return $('.menu-button')}
    private get icon_XButtonTop() { 
        return $('div.header-menu-button-icon-top[style="transform: translate3d(0px, 7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(140deg) skew(0deg, 0deg); transform-style: preserve-3d;"'
    )}
    private get icon_XButtonMedium() {
        return $('div.header-menu-button-icon-medium')
    }
    private get icon_XButtonBottom() {
        return $('div.header-menu-button-icon-bottom[style="transform: translate3d(0px, -7px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(40deg) skew(0deg, 0deg); transform-style: preserve-3d;"]')
    }
    private get lbl_Copyright() { return $('.footer-content-bottom div') }

    async clickRejectCookie() {
        await this.btn_RejectCookie.isDisplayed()
        await this.btn_RejectCookie.isClickable()
        await this.btn_RejectCookie.click()
    }

    async isLogiDisplayed() {
        return await this.img_ElfieLogo.isDisplayed()
    }

    async clickonHeaderMenu() {
        await this.btn_HamburgerMenu.isClickable()
        await this.btn_HamburgerMenu.click()
    }

    async isXButtonDisplayed() {
        try {
            await this.icon_XButtonTop.isDisplayed()
            await this.icon_XButtonMedium.isDisplayed()
            await this.icon_XButtonBottom.isDisplayed()
            return true
        } catch (error) {
            return false
        }
    }

    async getCopyrightText() {
        return await this.lbl_Copyright.getText()
    }
}

export default new ElfiePage()