// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment: {
  production: boolean;
  URL: string;
  login: string;
  getPreSharedKey: string;
  register: string;
  addRunner: string;
  updateRunner: string;
  deleteRunner: string;
  runnersEndpoint: string;
  addTraining: string,
  trainings: string,
  reportIssue: string
} = {
  production: false,
  URL: "http://localhost:49385/",
  login: "api/auth/login",
  getPreSharedKey: "api/auth/pre-shared-key",
  register: "api/coach/register",
  addRunner: "api/coach/runner",
  updateRunner: "api/coach/runner/update",
  deleteRunner: "api/coach/runner",
  runnersEndpoint: "api/coach/runners",
  addTraining: "api/coach/training",
  trainings: "api/coach/trainings",
  reportIssue: "api/coach/report-issue"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
