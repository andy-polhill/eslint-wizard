import puppeteer from 'puppeteer';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 15000;

const headless = process.env.AT_RUN_IN_BACKGROUND;

export default async (options) => await puppeteer.launch(Object.assign({}, options, {
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  headless: headless === undefined || headless === 'true',
  ignoreHTTPSErrors: true,
  // to debug the code
  // slowMo: 250,
}));
