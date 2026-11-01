import { expect } from "@playwright/test";

export class FramesWindowsAndAlertPageObject {

    constructor(page) {
        this.page = page;
        this.BrowserWindowsTab = page.getByText("Browser Windows");
        this.AlertTab = page.locator("//*[text()='Alerts']");
        this.Frametab = page.locator("//*[text()='Frames']");
        this.NestedFrameTab = page.getByText("Nested Frames");
        this.ModalDialoguesTab = page.getByText("Modal Dialogs");

        // BrowserWindowPage
        this.NewtabButton = page.getByText("New Tab");
        this.NewWindowButton = page.locator("//*[text()='New Window']");
        this.WindowMessageButton = page.locator("//*[text()='New Window Message']");
    }

    async clickBrowserWindowTab() {
        await this.BrowserWindowsTab.click();
    }

    async validateBrowserWindowTab() {
        await expect(this.NewtabButton).toBeVisible();
        await expect(this.NewWindowButton).toBeVisible();
        await expect(this.WindowMessageButton).toBeVisible();
    }

    async clickNewtab() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.NewtabButton.click()
        ]);  
        await newPage.waitForLoadState();
        this.newTabUrl = newPage.url();
        await newPage.close(); 
        return this.newTabUrl;
    }

    async validateNewTab() {
        expect(this.newTabUrl).toBe('https://demoqa.com/sample');
    }

    async clickNewWindow() {
        const [newPage] = await Promise.all([
            this.page.context().waitForEvent('page'),
            this.NewWindowButton.click()
        ]);
        
        await newPage.waitForLoadState();
        this.newWindowUrl = newPage.url();
        await newPage.close();  
        return this.newWindowUrl;
    }

    async validateNewWindow() {
        expect(this.newWindowUrl).toBe('https://demoqa.com/sample');
    }
}