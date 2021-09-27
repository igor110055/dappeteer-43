"use strict";

import puppeteer from "puppeteer";
import dappeteer from "@chainsafe/dappeteer";

const main = async () => {
  const browser = await dappeteer.launch(puppeteer, {metamaskVersion: 'v10.1.1'});
  console.log(browser);
}

main();
