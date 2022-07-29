const app = require("./app");

const port = process.env.PORT || 5500;

app.listen(port);

// http://localhost:5500/api/v1/user/add-user
// http://localhost:5500/api/v1/authentication/get-token
// http://localhost:5500/api/v1/admin/post-tour-plan
// http://localhost:5500/api/v1/admin/add-hotel
// http://localhost:5500/api/v1/admin/get-all-user
// http://localhost:5500/api/v1/admin/delete-tour-plan
// http://localhost:5500/api/v1/admin/delete-hotel
// http://localhost:5500/api/v1/admin/make-user-admin
// http://localhost:5500/api/v1/admin/delete-one-user
// http://localhost:5500/api/v1/hotels/get-all-hotel
// http://localhost:5500/api/v1/tour/all-tour-plan
