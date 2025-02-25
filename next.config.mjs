/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';

dotenv.config()

const nextConfig = {
    publicRuntimeConfig: {
      REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    },
  };
  
  export default nextConfig;