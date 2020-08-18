"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
exports.register = (app) => {
    const oidc = app.locals.oidc;
    // define a route handler for the default home page
    app.get("/", (req, res) => {
        res.render("index");
    });
    // define a secure route handler for the login page that redirects to /guitars
    app.get("/login", oidc.ensureAuthenticated(), (req, res) => {
        res.redirect("/guitars");
    });
    // define a route to handle logout
    app.get("/logout", (req, res) => {
        req.logout();
        res.redirect("/");
    });
    // define a secure route handler for the guitars page
    app.get("/guitars", oidc.ensureAuthenticated(), (req, res) => {
        res.render("guitars");
    });
};
//# sourceMappingURL=index.js.map