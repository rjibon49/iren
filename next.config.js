/** @type {import('next').NextConfig} */
require('dotenv').config();

module.exports = ({
  publicRuntimeConfig: {
      APP_NAME: 'Visualsage',
      API_DEVELOPMENT: 'http://localhost:5000/api',
      PRODUCTION: false
  },
  reactStrictMode: true,
images: {
  domains: ["i.postimg.cc", "i.ibb.co", "lh3.googleusercontent.com"],
},
swcMinify: true,
});
