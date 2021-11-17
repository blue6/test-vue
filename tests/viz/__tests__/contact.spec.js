import { driver } from "../../selenium/driver-factory";
import ContactPage from "../__pageobjects__/contactpage";

beforeAll(async () => {
  await driver.navigateTo("https://visualizing.info/contact");
});

afterAll(async () => {
  await driver.quit();
});

describe("visualizing.info contact page", () => {
  test("should be contacted as successfully", async () => {
    //await driver.internalDriver.sleep(1000);

    await ContactPage.setContactInfo("dt", "dt1393@yahoo.co.jp", "dt", "dt");
    await ContactPage.submit();
    expect(await ContactPage.getResultText()).toEqual(
      "ありがとうございます。メッセージは送信されました。"
    );
  });
});
