/* internal imports */
const app = require("./app");

/* establish server port */
app.listen(process.env.PORT, () => {
//   consoleMessage.successMessage(`App listening on ${process.env.PORT}.`);
    console.log(`App listening on ${process.env.PORT}.`)
});
