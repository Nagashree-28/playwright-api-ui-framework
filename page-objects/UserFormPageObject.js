import { expect } from "@playwright/test";

export class UserFormPageObject{

    constructor(page){
        this.page = page;
        this.FormTab = page.getByText("Forms");
        this.particeFormSubTab = page.getByText("Practice Form");
        this.NameLabel = page.locator("//*[text()='Name']");
        this.EmailLabel = page.locator("//label[text()='Email']");
        this.GenderLabel = page.locator("//*[text()='Gender']");
        this.MobileLabel = page.getByText("Mobile");
        this.DOBLabel = page.getByText("Date of Birth");
        this.SubjectsLabel = page.getByText("Subjects");
        this.HobbiesLabel = page.getByText("Hobbies");
        this.PictureLabel = page.getByText("Picture");
        this.CurrentAddressLabel = page.getByText("Current Address");
        this.StateAndCityLabel = page.getByText("State and City");
        this.FirstNameField = page.locator('#firstName');
        this.LastNameField = page.locator('#lastName');
        this.EmailField = page.locator('#userEmail');
        this.RadioButtonValues = page.locator("input[type='radio'] + label");
        this.MobileField = page.locator('#userNumber');
        this.DOBField = page.locator('#dateOfBirthInput');
        this.SubjectsField = page.locator('#subjectsInput');
        this.CheckboxValues = page.locator("//*[@type='checkbox'] + label");
        this.uploadPictureField = page.locator('#uploadPicture');
        this.StateDropdownField = page.locator("//*[text()='Select State']/following-sibling::*/input");
        this.StateDropdownValues = page.locator("//*[@role='listbox']/div");
        this.CityDropdownField = page.locator("//*[@id='city']/div");
        this.CityDropdownValues = page.locator("//*[@role='listbox']/div");
        this.CurrentAddressField = page.locator('#currentAddress');
        this.SubmitButton = page.locator("//button[text()='Submit']");
        this.SuccessPopup = page.locator("//*[@class='modal-content']");
    }

    async navigateTo(endpoint) {
        const target = endpoint ? endpoint : '/';
        await this.page.goto(target);
        }

     async FormTabClick(){
        //await expect(this.FormTab).toBeVisible();
        await this.FormTab.click();
    }

    async PracticeSubTabClick(){
        await expect(this.particeFormSubTab).toBeVisible();
        await this.particeFormSubTab.click();
    }

    async verifyForm(){
        await expect(this.NameLabel).toBeVisible();
        await expect(this.EmailLabel).toBeVisible();
        await expect(this.GenderLabel).toBeVisible();
        await expect(this.MobileLabel).toBeVisible();
        await expect(this.DOBLabel).toBeVisible();
        await expect(this.SubjectsLabel).toBeVisible();
        await expect(this.HobbiesLabel).toBeVisible();
        await expect(this.PictureLabel).toBeVisible();
        await expect(this.StateAndCityLabel).toBeVisible();
        await expect(this.CurrentAddressLabel).toBeVisible();
        await expect(this.SubmitButton).toBeVisible();  
    }

    async filltheName(firstName, lastName){
        await this.FirstNameField.fill(firstName);
        await this.LastNameField.fill(lastName);
    }

    async fillEmail(email){
        await this.EmailField.fill(email);
    }

    async chooseGender(gender){
    await this.RadioButtonValues.filter({ hasText: new RegExp(`^${gender}$`) }).click();
 }

    async fillMobileNumber(number){
        await this.MobileField.fill(number);
    }

    async fillDateOfBirth(dateOfBirth){
        await this.DOBField.fill(dateOfBirth);
    }

    async filltheSubjects(subjects){
        for (const subject of subjects) {
             await this.SubjectsField.fill(subject);
             await this.SubjectsField.press('Tab');
    }
}

async checkHobbies(hobbies){
    const hobbyList = Array.isArray(hobbies) ? hobbies : hobbies.split(',').map(h => h.trim());
    for (const hobby of hobbyList) {
        await this.page.getByRole('checkbox', { name: hobby }).click({ force: true });
    }
}

async UploadStudentImage(filePath){
    await this.uploadPictureField.setInputFiles(filePath);
}

async fillCurrentAddress(currentAddress){
    await this.CurrentAddressField.fill(currentAddress);
}

async ChooseState(state){
    await expect(this.CityDropdownField).toHaveAttribute('aria-disabled', 'true');
    await this.StateDropdownField.click();
    await this.StateDropdownValues.filter({ hasText: state }).click();
}

async ChooseCity(city){
    await expect(this.CityDropdownField).toBeEnabled();
    await this.CityDropdownField.click();
    await this.CityDropdownValues.filter({ hasText: city }).click();
}

async clickOnSubmit(){
    await this.SubmitButton.click();
}

async validateSuccessPopup(){
    await expect(this.SuccessPopup).toBeVisible();
}

}