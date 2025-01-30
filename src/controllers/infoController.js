exports.getInfo = (req, res) => {
    res.json({
        email: "cosyberry3@gmail.com",
        current_datetime: new Date().toISOString().split(".")[0] + "Z", // Removes milliseconds
        github_url: "https://github.com/Berr7Wa7ne/hng12-backend-stage0", // Removed .git
    });
};
