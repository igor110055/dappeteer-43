"use strict";

import puppeteer from "puppeteer";
import dappeteer from "@chainsafe/dappeteer";
import path from "path";

const main = async () => {
  const location = path.resolve(process.cwd(), 'metamask');
  const browser = await dappeteer.launch(puppeteer, {metamaskVersion: 'v10.1.1', metamaskLocation: location});
  console.log(browser);
}

main();
