/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    'MYSQL_HOST': '127.0.0.1',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': 'DANKTHEBANK',
    'MYSQL_USER': '',
    'MYSQL_PASSWORD': '',
  },
  webpack: (config) => {
    config.resolve = {
      ...config.resolve,
      fallback: {
        "crypto": require.resolve("crypto-browserify"),
        "fs": false,
        "path": false,
        "os": false,
      }
    }
    return config
  }
}
