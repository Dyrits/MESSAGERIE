const {defineConfig}=require('@playwright/test');
module.exports=defineConfig({testDir:'./tests',use:{baseURL:'http://127.0.0.1:38961',launchOptions:{executablePath:process.env.CHROME_BIN||undefined,args:['--no-sandbox']}},webServer:{command:'npx http-server dist/Messagerie -a 127.0.0.1 -p 38961',port:38961,reuseExistingServer:false}});
