const lineNotify = require('./notify');
const prettyMs = require('pretty-ms');

const onAfterRun = (on, config) => {
  on('after:run', async (results) => {
    const token = config.env.lineNotifyToken;
    if (!token) {
      throw new Error("Config 'lineNotifyToken' is required");
    }
    const duration = prettyMs(results.totalDuration);
    const message = `\nSuites: ${results.totalSuites},\nTests: ${results.totalTests},\nPassed: ${results.totalPassed}, Failed: ${results.totalFailed}, Pending: ${results.totalPending}, Skipped: ${results.totalSkipped}\nDuration: ${duration}`;
    await lineNotify(message, token);
  });
};

module.exports = onAfterRun;
