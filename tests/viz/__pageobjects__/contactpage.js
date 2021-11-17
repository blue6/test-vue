import { By } from "selenium-webdriver";
import { findElementBy } from "../../selenium/utils";

class ContactPage {
  get nameLocator() {
    return By.name("your-name");
  }
  get emailLocator() {
    return By.name("your-email");
  }
  get subjectLocator() {
    return By.name("your-subject");
  }
  get messageLocator() {
    return By.name("your-message");
  }
  get submitLocator() {
    return By.className("wpcf7-form-control wpcf7-submit");
  }
  get resultLocator() {
    return By.className("wpcf7-response-output");
  }

  async setContactInfo(name, email, subject, message) {
    await findElementBy(this.nameLocator).sendKeys(name);
    await findElementBy(this.emailLocator).sendKeys(email);
    await findElementBy(this.subjectLocator).sendKeys(subject);
    await findElementBy(this.messageLocator).sendKeys(message);
  }

  async submit() {
    await findElementBy(this.submitLocator).click();
  }

  async getResultText() {
    return findElementBy(this.resultLocator).getText();
  }
}

export default new ContactPage();
