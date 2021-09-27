"use strict";

import puppeteer from "puppeteer";
import path from "path";

const main = async () => {
  const location = path.resolve(process.cwd(), 'metamask', 'v10_1_1');
  console.log(location);
  const browser = await puppeteer.launch({
    headless: false,
    args: [`--disable-extensions-except=${location}`, `--load-extension=${location}`],
  });
  console.log(browser);
}

main();
