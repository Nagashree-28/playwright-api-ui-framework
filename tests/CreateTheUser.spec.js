import { test, expect } from '../Fixtures/BaseTest';
import userData from '../TestData/UserForm.json';
import { getProcessedTestData } from '../utils/dataHelper.js';

test.describe('Filling the Student form', () => {

    test('Verify Home page Objects', async ({ userFormPage, homePage }) => {
        const userFormData = getProcessedTestData(userData);
        await userFormPage.navigateTo(userFormData.endpoint);
        await homePage.homePageObjectValidation();
    });

    test('Fill and Submit Student Registration Form', async ({ userFormPage, homePage }) => {
        const userFormData = getProcessedTestData(userData);
        await userFormPage.navigateTo(userFormData.endpoint);
        await homePage.formTabClick();
        await userFormPage.PracticeSubTabClick();
        await userFormPage.verifyForm();
        await userFormPage.filltheName(userFormData.firstName, userFormData.lastName);
        await userFormPage.fillEmail(userFormData.email);
        await userFormPage.chooseGender(userFormData.gender);
        await userFormPage.fillMobileNumber(userFormData.number);
        await userFormPage.fillDateOfBirth(userFormData.dateOfBirth);
        await userFormPage.filltheSubjects(userFormData.subjects);
        await userFormPage.checkHobbies(userFormData.hobbies);
        await userFormPage.UploadStudentImage(userFormData.filePath);
        await userFormPage.fillCurrentAddress(userFormData.currentAddress);
        await userFormPage.ChooseState(userFormData.state);
        await userFormPage.ChooseCity(userFormData.city);
        await userFormPage.clickOnSubmit();
        await userFormPage.validateSuccessPopup();
    });

});