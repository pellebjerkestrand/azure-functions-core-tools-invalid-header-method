const { app } = require("@azure/functions");

app.get("root", {
  handler: async () => ({
    body: "hi",
  }),
  route: "/",
});
