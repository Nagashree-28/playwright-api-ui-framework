import { test, expect } from '../Fixtures/BaseTest';
import userData from '../TestData/UserForm.json';
import { getProcessedTestData } from '../utils/dataHelper.js';


    test('Handle the Windows and Tabs', async ({userFormPage ,framesWindowsAndAlertPage , homePage}) => {
        const userFormData = getProcessedTestData(userData);
        await userFormPage.navigateTo(userFormData.endpoint);
        await homePage.alertTabClick();
        await framesWindowsAndAlertPage.clickBrowserWindowTab();
        await framesWindowsAndAlertPage.validateBrowserWindowTab();
        await framesWindowsAndAlertPage.clickNewtab(); 
        await framesWindowsAndAlertPage.validateNewTab();
        await framesWindowsAndAlertPage.clickNewWindow();
        await framesWindowsAndAlertPage.validateNewWindow();
    });