/* Alex Coder - language switch + order flow */
var OWNER_EMAIL = "alexcodertiktok@gmail.com"; // البريد اللي بتوصله الطلبات
var PHONE = "01212714024";

var I18N = {
  en: {
    nav_home:"Home", nav_about:"About", hero_title:"We build your site, program or app.",
    hero_sub:"Pick a plan below and tell us what you need.",
    plan1:"Without amendment", plan1_d:"Delivered as agreed, one version.",
    plan2:"With amendment", plan2_d:"Includes changes after you review it.",
    plan3:"Start trial", plan3_d:"Try us first. No payment needed.",
    limited:"Limited offer", free:"Free", egp:"EGP", start:"Start", contact:"Contact",
    about_title:"About Alex Coder",
    about_p1:"Alex Coder is a programmer building websites, programs and mobile apps for people and small businesses.",
    about_p2:"Choose a plan with or without amendments, or start with a free trial to see how we work.",
    about_cta:"See the plans",
    t_site:"Site", t_program:"Program", t_app:"App", choose_type:"What do you need?",
    cont:"Continue", pay_title:"Choose a payment method", cash:"Cash", instapay:"Instapay",
    your_data:"Your details", name:"Name", email:"Email", phone:"Phone number", submit:"Submit",
    sending:"Sending...", sent:"Done! We received your details and will contact you soon.",
    fail:"Could not send automatically. Your email app will open so you can send it.",
    required:"Please fill in all fields correctly.", price_lbl:"Price", close:"Close"
  },
  ar: {
    nav_home:"الرئيسية", nav_about:"من نحن", hero_title:"بنعملك موقع أو برنامج أو تطبيق.",
    hero_sub:"اختار الباقة المناسبة وقولنا محتاج إيه.",
    plan1:"بدون تعديل", plan1_d:"بيتسلّم زي ما اتفقنا، نسخة واحدة.",
    plan2:"مع تعديل", plan2_d:"يشمل تعديلات بعد ما تراجع الشغل.",
    plan3:"تجربة مجانية", plan3_d:"جرّبنا الأول. من غير دفع.",
    limited:"عرض محدود", free:"مجاناً", egp:"جنيه", start:"ابدأ", contact:"للتواصل",
    about_title:"عن Alex Coder",
    about_p1:"Alex Coder مبرمج بيعمل مواقع وبرامج وتطبيقات موبايل للأفراد والشركات الصغيرة.",
    about_p2:"اختار باقة بتعديل أو بدون تعديل، أو ابدأ بتجربة مجانية تشوف بيها طريقة شغلنا.",
    about_cta:"شوف الباقات",
    t_site:"موقع", t_program:"برنامج", t_app:"تطبيق", choose_type:"محتاج إيه؟",
    cont:"متابعة", pay_title:"اختار طريقة الدفع", cash:"كاش", instapay:"إنستاباي",
    your_data:"بياناتك", name:"الاسم", email:"البريد الإلكتروني", phone:"رقم الموبايل", submit:"إرسال",
    sending:"جاري الإرسال...", sent:"تم! استلمنا بياناتك وهنتواصل معاك قريباً.",
    fail:"مقدرناش نبعت تلقائياً. هيفتح تطبيق الإيميل عندك عشان تبعتها.",
    required:"من فضلك املأ كل الخانات بشكل صحيح.", price_lbl:"السعر", close:"إغلاق"
  }
};

var lang = "en";
try { lang = localStorage.getItem("lang") || "en"; } catch (e) {}
var state = { plan: null, type: "site" };

function t(k){ return I18N[lang][k] || k; }

function applyLang(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(function(el){ el.textContent = t(el.dataset.i18n); });
  var b = document.getElementById("langBtn");
  if (b) b.textContent = lang === "ar" ? "English" : "العربية";
  var c = document.getElementById("closeBtn");
  if (c) c.setAttribute("aria-label", t("close"));
  var title = document.title.indexOf("About") === 0 || document.title.indexOf("عن") === 0;
  document.title = (title ? t("about_title") + " - " : "") + "Alex Coder";
  if (state.plan && !document.getElementById("overlay").hidden) render();
}

var PLANS = {
  plain: { name:"plan1", price:100 },
  amend: { name:"plan2", price:200 },
  trial: { name:"plan3", price:0 }
};

function formHTML(withPay){
  var pay = withPay ?
    '<h4>' + t("pay_title") + '</h4><div class="opts">' +
    '<label class="opt"><input type="radio" name="pay" value="Cash" checked> ' + t("cash") + '</label>' +
    '<label class="opt"><input type="radio" name="pay" value="Instapay"> ' + t("instapay") + '</label></div>' : "";
  return pay + '<h4>' + t("your_data") + '</h4>' +
    '<label class="field"><span>' + t("name") + '</span><input id="fName" type="text" autocomplete="name"></label>' +
    '<label class="field"><span>' + t("email") + '</span><input id="fEmail" type="email" autocomplete="email" dir="ltr"></label>' +
    '<label class="field"><span>' + t("phone") + '</span><input id="fPhone" type="tel" autocomplete="tel" dir="ltr"></label>' +
    '<button id="submitBtn" class="submit" type="button">' + t("submit") + '</button><div id="msg" class="msg" role="status"></div>';
}

function render(){
  var p = PLANS[state.plan], body = document.getElementById("panelBody"), h;
  if (state.step === 1) {
    h = '<h3>' + t(p.name) + '</h3><p class="sub">' + t("choose_type") + '</p><div class="opts">' +
      ["site","program","app"].map(function(k){
        return '<label class="opt"><input type="radio" name="type" value="' + k + '"' + (state.type === k ? " checked" : "") + '> ' + t("t_" + k) + '</label>';
      }).join("") + '</div><button id="contBtn" class="continue" type="button">' + t("cont") + '</button>';
  } else if (state.plan === "trial") {
    h = '<h3>' + t(p.name) + '</h3>' + formHTML(false) +
      '<p class="contact">' + t("contact") + ': <a href="tel:' + PHONE + '" dir="ltr">' + PHONE + '</a></p>';
  } else {
    h = '<h3>' + t(p.name) + '</h3><p class="sub">' + t("t_" + state.type) + '</p>' +
      '<div class="big-price">' + p.price + ' ' + t("egp") + '</div>' + formHTML(true);
  }
  body.innerHTML = h;
  var cb = document.getElementById("contBtn");
  if (cb) cb.onclick = function(){
    var r = document.querySelector('input[name="type"]:checked'); state.type = r ? r.value : "site";
    state.step = 2; render();
  };
  var sb = document.getElementById("submitBtn");
  if (sb) sb.onclick = submitForm;
}

function openPlan(plan){
  state.plan = plan; state.type = "site";
  state.step = plan === "trial" ? 2 : 1;
  render();
  document.getElementById("overlay").hidden = false;
}

function submitForm(){
  var name = document.getElementById("fName").value.trim();
  var email = document.getElementById("fEmail").value.trim();
  var phone = document.getElementById("fPhone").value.trim();
  var msg = document.getElementById("msg");
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || !/^[0-9+\s-]{8,15}$/.test(phone)) {
    msg.className = "msg err"; msg.textContent = t("required"); return;
  }
  var p = PLANS[state.plan], payEl = document.querySelector('input[name="pay"]:checked');
  var data = {
    _subject: "Alex Coder - new order (" + state.plan + ")",
    plan: I18N.en[p.name],
    type: state.plan === "trial" ? "-" : state.type,
    price: state.plan === "trial" ? "Free trial" : p.price + " EGP",
    payment_method: payEl ? payEl.value : "-",
    name: name, email: email, phone: phone
  };
  msg.className = "msg"; msg.textContent = t("sending");
  fetch("https://formsubmit.co/ajax/" + OWNER_EMAIL, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify(data)
  }).then(function(r){ if (!r.ok) throw new Error("fail"); return r.json(); })
    .then(function(){ document.getElementById("panelBody").innerHTML = '<p class="done"><strong>' + t("sent") + '</strong></p>'; })
    .catch(function(){
      msg.className = "msg err"; msg.textContent = t("fail");
      var body = Object.keys(data).map(function(k){ return k + ": " + data[k]; }).join("\n");
      window.location.href = "mailto:" + OWNER_EMAIL + "?subject=" + encodeURIComponent(data._subject) + "&body=" + encodeURIComponent(body);
    });
}

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("langBtn").addEventListener("click", function(){
    lang = lang === "ar" ? "en" : "ar";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    applyLang();
  });
  var ov = document.getElementById("overlay");
  if (ov) {
    document.querySelectorAll(".start").forEach(function(b){ b.addEventListener("click", function(){ openPlan(b.dataset.plan); }); });
    document.getElementById("closeBtn").addEventListener("click", function(){ ov.hidden = true; });
    ov.addEventListener("click", function(e){ if (e.target === ov) ov.hidden = true; });
    document.addEventListener("keydown", function(e){ if (e.key === "Escape") ov.hidden = true; });
  }
  applyLang();
});
