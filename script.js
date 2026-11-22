/* Alex Coder - language switch + order flow */
var OWNER_EMAIL = "alexcodertiktok@gmail.com"; // البريد اللي بتوصله الطلبات
var PHONE = "01212714024";
var WA_LINK = "https://wa.me/qr/BRRH6QK6KXRFN1";

/* اللوجو متخزن هنا جوه الكود (base64) */
var LOGO = "data:image/jpeg;base64,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";

var I18N = {
  en: {
    nav_home:"Home", nav_about:"About", hero_title:"We build your site, program or app.",
    hero_sub:"Pick a plan below and tell us what you need.",
    plan1:"Without amendment", plan1_d:"Delivered as agreed, one version.",
    plan2:"With amendment", plan2_d:"Includes changes after you review it.",
    plan3:"Start trial", plan3_d:"Try us first. No payment needed.",
    defs_title:"What do we mean by site, program and app?", def_site:"A website is a group of pages you open in a browser using a link, like a company page, an online store or a portfolio. It works on any device and needs no installation.", def_program:"A program is software installed on a computer to do a specific job, like accounting, inventory or managing a clinic. It can often work without internet.", def_app:"An app is a mobile application you download on your phone (Android or iPhone). It is designed for touch screens and can send you notifications.", contact_us:"Contact us", or_in:"or in", limited:"Limited offer", free:"Free", egp:"EGP", start:"Start", contact:"Contact",
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
    defs_title:"يعني إيه موقع وبرنامج وتطبيق؟", def_site:"الموقع مجموعة صفحات بتفتحها من المتصفح عن طريق لينك، زي صفحة شركة أو متجر إلكتروني أو معرض أعمال. بيشتغل على أي جهاز ومش محتاج تحميل.", def_program:"البرنامج هو سوفتوير بيتثبت على الكمبيوتر عشان يعمل شغلانة معينة، زي الحسابات أو المخزن أو إدارة عيادة. وغالباً بيشتغل من غير إنترنت.", def_app:"التطبيق هو برنامج موبايل بتحمّله على تليفونك (أندرويد أو آيفون). متصمم للمس الشاشة وممكن يبعتلك إشعارات.", contact_us:"تواصل معنا", or_in:"أو على", limited:"عرض محدود", free:"مجاناً", egp:"جنيه", start:"ابدأ", contact:"للتواصل",
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
      '<p class="contact">' + t("contact_us") + ' <a href="tel:' + PHONE + '" dir="ltr">' + PHONE + '</a> ' + t("or_in") + ' <a href="' + WA_LINK + '" target="_blank" rel="noopener">WhatsApp</a></p>';
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
  document.querySelectorAll(".logo img").forEach(function(i){ i.src = LOGO; });
  var fav = document.createElement("link"); fav.rel = "icon"; fav.href = LOGO; document.head.appendChild(fav);
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
