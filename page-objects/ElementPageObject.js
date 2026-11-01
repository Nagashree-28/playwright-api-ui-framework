import { expect } from "@playwright/test";

export class ElementPageObject{

    constructor(page){
        this.page = page;
        this.ElementSideTab = page.getByText("Elements");
        this.TextBoxSubTab = page.getByText("Text Box");
        this.CheckBoxSubTab = page.getByText("Check Box");
        this.RadioButtonSubTab = page.getByText("Radio Button");
        this.WebTableSubTab = page.getByText("Web Tables");
        this.ButtonsSubTab = page.getByText("Buttons");
        this.LinksSubTab = page.locator("//span[text()='Links']");
        this.BrokenLinksSubTab = page.getByText("Broken Links - Images");
        this.UploadAndDownloadSubTab = page.getByText("Upload and Download");
        this.DynamicPropertiesSubTab = page.getByText("Dynamic Properties");
        this.FormsSubTab = page.getByText("Forms");
        this.AlertSubTab = page.getByText("Alerts, Frame & Windows");
        this.WidgetsSubTab = page.getByText("Widgets");
        this.InteractionsSubTab = page.getByText("Interactions");
        this.BookStoreAppSubTab = page.getByText("Book Store Application");
    }

    async elementPageValidation(){
        await expect(this.TextBoxSubTab).toBeVisible();
        await expect(this.CheckBoxSubTab).toBeVisible();
        await expect(this.RadioButtonSubTab).toBeVisible();
        await expect(this.WebTableSubTab).toBeVisible();
        await expect(this.ButtonsSubTab).toBeVisible();
        await expect(this.LinksSubTab).toBeVisible();
        await expect(this.BrokenLinksSubTab).toBeVisible();
        await expect(this.UploadAndDownloadSubTab).toBeVisible();
        await expect(this.DynamicPropertiesSubTab).toBeVisible();
        await expect(this.FormsSubTab).toBeVisible();
        await expect(this.AlertSubTab).toBeVisible();
        await expect(this.WidgetsSubTab).toBeVisible();
        await expect(this.InteractionsSubTab).toBeVisible();
        await expect(this.BookStoreAppSubTab).toBeVisible();
    }

    async clickOnElementTab(){
        await this.ElementSideTab.click();
    }

    async textBoxSubTabClick(){
        await this.TextBoxSubTab.click();
    }

}