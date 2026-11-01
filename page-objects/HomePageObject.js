import { expect } from "@playwright/test";

export class HomePageObject{

    constructor(page) {
    this.page = page;
    this.HomepageBanner = page.locator("//div[@class='home-banner']");
    this.ElementTab = page.getByText("Elements");
    this.FormTab = page.getByText("Forms");
    this.AlertTab = page.getByText("Alerts, Frame & Windows");
    this.WidgetTab = page.getByText("Widgets");
    this.InteractionTab = page.getByText("Interactions");
    this.BookStoreAppTab = page.getByText("Book Store Application");
    }

    async homePageObjectValidation(){
        await expect(this.HomepageBanner).toBeVisible();
        await expect(this.ElementTab).toBeVisible();
        await expect(this.FormTab).toBeVisible();
        await expect(this.AlertTab).toBeVisible();
        await expect(this.WidgetTab).toBeVisible();
        await expect(this.InteractionTab).toBeVisible();
        await expect(this.BookStoreAppTab).toBeVisible();
    }

    async elementTabClick(){
        await this.ElementTab.click();
    }

    async formTabClick(){
        await this.FormTab.click();
    }

    async alertTabClick(){
        await this.AlertTab.click();
    }

    async widgetTabTabClick(){
        await this.WidgetTab.click();
    }

    async interactionTabTabClick(){
        await this.InteractionTab.click();
    }

    async bookStoreAppTabTabClick(){
        await this.BookStoreAppTab.click();
    }
}