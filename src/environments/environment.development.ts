export const environment = {
  production: false,
  apiUrl: process.env["BACKEND_URL"] || 'http://backend:8081',
  featureFlag: true
};
