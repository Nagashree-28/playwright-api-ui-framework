import { test as base } from '@playwright/test';
import { HomePageObject } from '../page-objects/HomePageObject'; 
import { UserFormPageObject } from '../page-objects/UserFormPageObject';
import { FramesWindowsAndAlertPageObject } from '../page-objects/FramesWindowsAndAlertPageObject';

export const test = base.extend({
    homePage: async ({ page }, use) => {
        await use(new HomePageObject(page));
    },

    userFormPage: async ({ page }, use) => {
        await use(new UserFormPageObject(page));
    },

    framesWindowsAndAlertPage: async ({ page }, use) => {
        await use(new FramesWindowsAndAlertPageObject(page));
    },
});

export const expect = base.expect;