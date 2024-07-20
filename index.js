var cron = require("node-cron");
const moment = require("moment-timezone");
const { resetAccounts, resetUsers, resetKeys } = require("./controllers");

cron.schedule("1 * * * * *", async () => {
  const startTanSuat = moment()
    .tz("Asia/Ho_Chi_Minh")
    .set({ hour: 0, minute: 0, second: 0 })
    .toDate();
  const endTanSuat = moment()
    .tz("Asia/Ho_Chi_Minh")
    .set({ hour: 0, minute: 1, second: 5 })
    .toDate();

  const currentTime = moment().tz("Asia/Ho_Chi_Minh").toDate();
  if (startTanSuat < currentTime && currentTime < endTanSuat) {
    console.log(`Start reset at ${currentTime}`);
    await resetAccounts();
    await resetUsers();
    await resetKeys();
    console.log("Reseted");
  }
});
