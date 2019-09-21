module.exports = {
  apps: [
    {
      name: 'owlspot',
      script: 'src/index.js',
      log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS Z',
      watch: ['src/'],
      env: {
        NODE_ENV: 'develop',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
