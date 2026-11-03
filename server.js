const express = require("express");

const app = express();

const PORT = 8002;

// ========================================
// REDIRECT ROUTES
// ========================================

const redirectRoutes = {
    "/WZE55": "https://adsgateway.net/WZE55",
    "/VD5VN": "https://adsgateway.net/VD5VN",
    "/E08MN": "https://adsgateway.net/E08MN",
};

// ========================================
// REDIRECT HANDLER
// ========================================

app.get(Object.keys(redirectRoutes), (req, res) => {
    const targetUrl = redirectRoutes[req.path];

    if (!targetUrl) {
        return res.status(404).send("Link not found");
    }

    return res.redirect(302, targetUrl);
});

// ========================================
// 404
// ========================================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});

// ========================================
// START SERVER
// ========================================

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Redirect server running on port ${PORT}`);
});