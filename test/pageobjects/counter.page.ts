import { ChainablePromiseElement } from "webdriverio";
import * as find from "appium-flutter-finder";

class CounterPage {
  // LOCATORS
  public get addButton() {
    return find.byValueKey("add_button");
  }

  public get textCounter() {
    return find.byValueKey("text_counter");
  }

  public get textNumberCounter() {
    return find.byValueKey("text_number_counter");
  }

  // METHODS
  async clickButton() {
    return await driver.elementClick(this.addButton);
  }

  async getElementText(element) {
    return await driver.getElementText(element);
  }
}

export default new CounterPage();
