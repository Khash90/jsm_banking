// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://e4751f30f1af715c60ee627c9bb57559@o4507417515261952.ingest.de.sentry.io/4508080358293584",

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  //how many users visit your websites
  tracesSampleRate: 1,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
