const { execSync: exec } = require('child_process')
require('dotenv').config()

try {
  exec('npx auto shipit', {
    stdio: 'pipe',
    encoding: 'utf8',
    env: {
      ...process.env,
      GITHUB_TOKEN: process.env.GITHUB_TOKEN,
    }
  })
} catch {
  console.error('Error while executing auto')
}
