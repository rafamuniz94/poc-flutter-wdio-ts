import { Given, When, Then, Before, After } from "@wdio/cucumber-framework";
import CounterPage from "../../pageobjects/counter.page.js";

Before(async () => {});

let number: string;
let message: string;

Given("I am on the Counter page", async function () {
  message = await CounterPage.getElementText(CounterPage.textCounter);
  expect(message).toEqual("You have pushed the button this many times:");
});

When("I click the add button", async function () {
  number = await CounterPage.getElementText(CounterPage.textNumberCounter);
  expect(number).toEqual("0");

  await CounterPage.clickButton();
});

Then(
  "I should see counter increase to {string}",
  async function (expectedNumber: string) {
    number = await CounterPage.getElementText(CounterPage.textNumberCounter);
    expect(number).toEqual(expectedNumber);
  }
);
