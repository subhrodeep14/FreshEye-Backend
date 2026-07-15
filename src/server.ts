import app from "./app";

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("--------------------------------");
    console.log("🚀 Server Started");
    console.log(`🌍 http://localhost:${PORT}`);
    console.log("--------------------------------");
});