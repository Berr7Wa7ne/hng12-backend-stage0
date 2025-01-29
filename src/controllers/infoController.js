exports.getInfo = (req, res) => {
    res.json({
        email: "cosyberry3@gmail.com.com",
        current_datetime: new Date().toISOString(),
        github_url: "https://github.com/Berr7Wa7ne/hng12-backend-stage0.git",
    });
};