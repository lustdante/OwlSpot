function loadEnv() {
  const fs = require('fs');
  const path = require('path');
  const dotEnvExpand = require('dotenv-expand');
  const dotEnv = require('dotenv');

  const envFiles = ['.env.development', '.env.test', '.env.production'].filter(
    envFile => new RegExp(`${process.env.NODE_ENV}$`).test(envFile),
  );

  envFiles.push('.env');
  envFiles.forEach(envFile => {
    if (fs.existsSync(envFile)) {
      dotEnvExpand(
        dotEnv.config({ path: path.resolve(process.cwd(), envFile) }),
      );
    }
  });
}

loadEnv();
