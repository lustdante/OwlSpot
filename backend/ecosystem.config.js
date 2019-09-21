module.exports = {
  apps: [
    {
      name: 'owlspot',
      script: 'src/index.js',
      log_date_format: 'YYYY-MM-DD HH:mm:ss.SSS Z',
      watch: ['src/'],
    },
  ],
};
