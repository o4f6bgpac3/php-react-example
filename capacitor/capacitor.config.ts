import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.acme.app',
  appName: 'ACME',
  webDir: '../spa/dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
