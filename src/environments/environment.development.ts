export const environment = {
  production: false,
  apiUrl: process.env["BACKEND_URL"] || 'http://backend-service:8081',
  featureFlag: true
};
