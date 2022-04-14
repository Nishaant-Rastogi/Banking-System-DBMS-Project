/** @type {import('next').NextConfig} */
module.exports = {
  env: {
    'MYSQL_HOST': 'localhost',
    'MYSQL_PORT': '3306',
    'MYSQL_DATABASE': 'DANKTHEBANK',
    'MYSQL_USER': 'root',
    'MYSQL_PASSWORD': 'mysql',
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
