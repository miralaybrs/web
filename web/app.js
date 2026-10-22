/**
 * SERAP NAIL ART & BEAUTY STUDIO — INTERACTIVE ELECTRON-STYLE APP CONTROLLER
 * Clean Monoline SVG Icons (Zero Emojis)
 */

const WHATSAPP_NUMBER = "905364206263";

// 1. Complete Service Catalog (Used by Interactive Package Builder)
const SERVICES_DATA = [
  {
    id: "protez-tirnak",
    category: "tirnak",
    tag: "En Çok Tercih Edilen",
    title: "Protez Tırnak & Jel Uzatma",
    desc: "Tırnak yapınıza özel badem, kare, stiletto veya coffin formda kırılmaya dayanıklı, doğal görünümlü jel uzatma.",
    duration: "90 Dk",
    image: "photo/el_bakim_04.webp"
  },
  {
    id: "kalici-oje-french",
    category: "tirnak",
    tag: "Klasik & Zarif",
    title: "Kalıcı Oje & French Nail Art",
    desc: "3-4 hafta boyunca ilk günkü parlaklığını koruyan, soyulmayan kalıcı oje, ince French ve zarif tırnak sanatı.",
    duration: "60 Dk",
    image: "photo/el_bakim_03.webp"
  },
  {
    id: "rus-manikuru",
    category: "tirnak",
    tag: "Kusursuz Bakım",
    title: "Rus Manikürü & Tırnak Güçlendirme",
    desc: "Özel freze uçlarla kütikül temizliği ve ince kırılgan tırnaklar için BIAB / Jel güçlendirme uygulaması.",
    duration: "50 Dk",
    image: "photo/el_bakim_05.webp"
  },
  {
    id: "vip-nail-art",
    category: "tirnak",
    tag: "İmza Tasarım",
    title: "Özel Tasarım Nail Art & Chrome",
    desc: "Baby boomer, inci tozu (chrome), kedi gözü (cat eye) ve el çizimi sanatsal desenlerle size özel tırnaklar.",
    duration: "75 Dk",
    image: "photo/el_bakim_01.webp"
  },
  {
    id: "spa-pedikur",
    category: "ayak",
    tag: "Hijyenik & Rahatlatıcı",
    title: "Medikal & Spa Ayak Bakımı (Pedikür)",
    desc: "Tek kullanımlık steril poşetli havuzda aromaterapi tuzu, peeling, ölü deri temizliği ve yumuşacık topuk bakımı.",
    duration: "60 Dk",
    image: "photo/ayak_bakim_03.webp"
  },
  {
    id: "ayak-kalici-oje",
    category: "ayak",
    tag: "Estetik Dokunuş",
    title: "Ayak Tırnak Bakımı & Kalıcı French",
    desc: "Freze ile kusursuz ayak tırnak eti temizliği ve yaz-kış bakımlı görünüm sağlayan kalıcı French oje.",
    duration: "50 Dk",
    image: "photo/ayak_bakim_01.webp"
  },
  {
    id: "derin-cilt-bakimi",
    category: "cilt",
    tag: "Canlandırıcı Terapi",
    title: "Profesyonel Ozon Buharlı Cilt Bakımı",
    desc: "Ozon buharı ile gözenek açma, siyah nokta ve komedon arındırma, yüksek frekans ve nem bombası maske.",
    duration: "75 Dk",
    image: "photo/cilt_bakim_03.webp"
  },
  {
    id: "anti-aging-maske",
    category: "cilt",
    tag: "Işıltı & Yenilenme",
    title: "Cilt Yenileyici Leke & Nem Protokolü",
    desc: "Yorgun ve mat ciltler için vitamin kompleksli kolajen maskesi, yüz masajı ve bariyer onarıcı bakım.",
    duration: "60 Dk",
    image: "photo/cilt_bakim_04.webp"
  }
];

// 2. Real Photos Gallery Data (All 27 WebP Photos from web/photo/)
const GALLERY_ITEMS = [
  { src: "photo/el_bakim_04.webp", cat: "tirnak", title: "Klasik Beyaz French Protez Tırnak", badge: "Protez & Nail Art" },
  { src: "photo/el_bakim_05.webp", cat: "tirnak", title: "Sedefli İnci Beyazı Badem Tırnak", badge: "Badem Kesim" },
  { src: "photo/el_bakim_03.webp", cat: "tirnak", title: "Doğal Nude Tabanlı Zarif French", badge: "Kalıcı Oje" },
  { src: "photo/el_bakim_02.webp", cat: "tirnak", title: "Kusursuz İnce Çizgi French Sanatı", badge: "El Bakımı" },
  { src: "photo/el_bakim_01.webp", cat: "tirnak", title: "Profesyonel Tırnak Şekillendirme", badge: "Uygulama Anı" },
  { src: "photo/ayak_bakim_03.webp", cat: "ayak", title: "Ayak French Kalıcı Oje & Işıltı", badge: "Spa Pedikür" },
  { src: "photo/ayak_bakim_04.webp", cat: "ayak", title: "Yaz Boyu Kalıcı Bakımlı Ayaklar", badge: "Ayak Estetiği" },
  { src: "photo/ayak_bakim_01.webp", cat: "ayak", title: "İnce Fırça İle Hassas Pedikür Sanatı", badge: "Hijyenik Bakım" },
  { src: "photo/ayak_bakim_02.webp", cat: "ayak", title: "Peeling & Nemlendirici Ayak Masajı", badge: "Spa Terapi" },
  { src: "photo/ayak_bakim_06.webp", cat: "ayak", title: "Medikal Freze İle Tırnak Eti Bakımı", badge: "Kuru Pedikür" },
  { src: "photo/ayak_bakim_07.webp", cat: "ayak", title: "Mutlu Danışan & VIP Pedikür Koltuğu", badge: "Birebir İlgi" },
  { src: "photo/ayak_bakim_05.webp", cat: "ayak", title: "Güler Yüzlü ve Samimi Bakım Seansı", badge: "Müşteri Memnuniyeti", rotateFix: true },
  { src: "photo/cilt_bakim_03.webp", cat: "cilt", title: "Ozon Buharı Eşliğinde Kil Maskesi", badge: "Cilt Bakımı" },
  { src: "photo/cilt_bakim_02.webp", cat: "cilt", title: "Derinlemesine Köpük & Gözenek Temizliği", badge: "Arındırma" },
  { src: "photo/cilt_bakim_04.webp", cat: "cilt", title: "Yatıştırıcı ve Nemlendirici Yüz Maskesi", badge: "Canlandırıcı Bakım" },
  { src: "photo/cilt_bakim_01.webp", cat: "cilt", title: "Hassas Ayak & Tırnak Bakım Hazırlığı", badge: "Steril Ekipman" },
  { src: "photo/serap_nail_art_06.webp", cat: "mekan", title: "Serap Hanım & Hijyenik Pedikür Ünitesi", badge: "Kurucu Uzman" },
  { src: "photo/serap_nail_art_09.webp", cat: "mekan", title: "Pembe Kadife Koltuklu Ferah Stüdyomuz", badge: "VIP Stüdyo" },
  { src: "photo/serap_nail_art_08.webp", cat: "mekan", title: "Bursa Tarihi Dokuda Serap Nail Art Tabelamız", badge: "Bursa Merkez" },
  { src: "photo/serap_nail_art_01.webp", cat: "mekan", title: "Profesyonel Ozon Buharlı Cilt Bakım Odası", badge: "Cilt Ünitesi" },
  { src: "photo/serap_nail_art_11.webp", cat: "mekan", title: "Nail Art Masası & Ring Light Stüdyo Köşesi", badge: "Tırnak İstasyonu" },
  { src: "photo/serap_nail_art_13.webp", cat: "mekan", title: "Manikür ve VIP Pedikür Alanı Genel Görünüm", badge: "Butik Konsept" },
  { src: "photo/serap_nail_art_04.webp", cat: "mekan", title: "Sizi Bekleyen Sıcak ve Samimi Karşılama", badge: "Serap Nail Art" },
  { src: "photo/serap_nail_art_05.webp", cat: "mekan", title: "Kişiye Özel Cilt ve Güzellik Köşemiz", badge: "Birebir Seans" },
  { src: "photo/serap_nail_art_02.webp", cat: "mekan", title: "Stüdyo Girişi & Gün Işığı Ferahlığı", badge: "Hoş Geldiniz" },
  { src: "photo/serap_nail_art_12.webp", cat: "mekan", title: "UV/LED Kurutucu ve Profesyonel Freze Ekipmanları", badge: "Teknoloji" },
  { src: "photo/serap_nail_art_14.webp", cat: "mekan", title: "Yüksek Frekans & Buhar Terapi Cihazlarımız", badge: "Medikal Cilt" }
];

// State
let selectedServices = new Set(["protez-tirnak"]);
let activeServiceCategory = "all";

document.addEventListener("DOMContentLoaded", () => {
  initCursorGlow();
  initThemeToggle();
  initServicesBuilder();
  initGallery();
  initFaqAccordion();
});

// Ambient Cursor Glow
function initCursorGlow() {
  const glow = document.getElementById("cursorGlow");
  if (!glow) return;
  window.addEventListener("mousemove", (e) => {
    glow.style.left = `${e.clientX}px`;
    glow.style.top = `${e.clientY}px`;
  });
}

// Theme Switcher (Pearl Light vs Rose Night)
function initThemeToggle() {
  const btn = document.getElementById("themeToggleBtn");
  const label = document.getElementById("themeToggleLabel");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const html = document.documentElement;
    const isNight = html.getAttribute("data-theme") === "rose-night";
    if (isNight) {
      html.removeAttribute("data-theme");
      if (label) label.textContent = "Gece Modu";
    } else {
      html.setAttribute("data-theme", "rose-night");
      if (label) label.textContent = "İnci Modu";
    }
  });
}

// Interactive Service Catalog & Package Builder
function initServicesBuilder() {
  const tabBtns = document.querySelectorAll("[data-service-tab]");
  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeServiceCategory = btn.getAttribute("data-service-tab");
      renderServiceCards();
    });
  });

  const sendBookingBtn = document.getElementById("sendPackageWhatsAppBtn");
  if (sendBookingBtn) {
    sendBookingBtn.addEventListener("click", () => {
      const clientName = document.getElementById("bookingNameInput")?.value.trim() || "";
      const preferredDay = document.getElementById("bookingDaySelect")?.value || "En Kısa Sürede";
      const chosenTitles = SERVICES_DATA
        .filter((s) => selectedServices.has(s.id))
        .map((s) => `• ${s.title} (${s.duration})`);

      const servicesBlock = chosenTitles.length > 0
        ? chosenTitles.join("\n")
        : "• Genel Bakım & Danışmanlık";

      const greeting = clientName ? `Merhaba Serap Hanım, ben *${clientName}*.` : `Merhaba Serap Hanım,`;
      const text = `${greeting}\nWeb siteniz üzerinden aşağıdaki işlemler için randevu oluşturmak istiyorum:\n\n${servicesBlock}\n\nTercih Ettiğim Zaman: ${preferredDay}\n\nMüsait saatlerinizi paylaşabilir misiniz?`;
      openWhatsApp(text);
    });
  }

  renderServiceCards();
  renderBookingSummary();
}

function renderServiceCards() {
  const grid = document.getElementById("serviceCardsGrid");
  if (!grid) return;

  const filtered = activeServiceCategory === "all"
    ? SERVICES_DATA
    : SERVICES_DATA.filter((item) => item.category === activeServiceCategory);

  grid.innerHTML = filtered.map((item) => {
    const isSelected = selectedServices.has(item.id);
    return `
      <article class="service-item-card ${isSelected ? "selected" : ""}" data-service-id="${item.id}">
        <img src="${item.image}" alt="${item.title} - Serap Nail Art Bursa" class="service-card-img" loading="lazy">
        <div class="service-card-body">
          <div>
            <span class="service-tag">${item.tag}</span>
            <h3>${item.title}</h3>
            <p>${item.desc}</p>
          </div>
          <div class="service-meta-row">
            <span style="display:inline-flex;align-items:center;gap:5px;color:var(--text-muted);">
              <svg class="ui-icon" style="width:15px;height:15px;"><use href="#i-clock"></use></svg>
              ~${item.duration}
            </span>
            <span class="add-service-check">
              <svg class="ui-icon" style="width:14px;height:14px;"><use href="${isSelected ? "#i-check" : "#i-plus"}"></use></svg>
              ${isSelected ? "Pakete Eklendi" : "Randevuya Ekle"}
            </span>
          </div>
        </div>
      </article>
    `;
  }).join("");

  grid.querySelectorAll(".service-item-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-service-id");
      if (selectedServices.has(id)) {
        selectedServices.delete(id);
      } else {
        selectedServices.add(id);
      }
      renderServiceCards();
      renderBookingSummary();
    });
  });
}

function renderBookingSummary() {
  const listEl = document.getElementById("selectedServicesList");
  const countEl = document.getElementById("selectedCountBadge");
  const durationEl = document.getElementById("totalDurationText");
  if (!listEl) return;

  const chosen = SERVICES_DATA.filter((s) => selectedServices.has(s.id));
  if (countEl) countEl.textContent = `${chosen.length} İşlem Seçildi`;

  let totalMins = 0;
  chosen.forEach((c) => {
    totalMins += parseInt(c.duration, 10) || 60;
  });
  if (durationEl) {
    durationEl.textContent = chosen.length ? `Tahmini Süre: ~${totalMins} Dakika (Birebir VIP Seans)` : "Henüz işlem seçilmedi";
  }

  if (chosen.length === 0) {
    listEl.innerHTML = `<li style="justify-content:center;color:var(--text-muted);">Soldaki kartlara tıklayarak istediğiniz bakımları ekleyebilirsiniz.</li>`;
    return;
  }

  listEl.innerHTML = chosen.map((item) => `
    <li>
      <span style="display:inline-flex;align-items:center;gap:8px;">
        <svg class="ui-icon" style="width:15px;height:15px;color:var(--primary);"><use href="#i-check"></use></svg>
        ${item.title}
      </span>
      <button type="button" class="remove-item-btn" data-remove-id="${item.id}" title="Kaldır">✕</button>
    </li>
  `).join("");

  listEl.querySelectorAll("[data-remove-id]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-remove-id");
      selectedServices.delete(id);
      renderServiceCards();
      renderBookingSummary();
    });
  });
}

// Real Studio Photo Gallery & Lightbox
function initGallery() {
  const filterBtns = document.querySelectorAll("[data-gallery-filter]");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGalleryItems(btn.getAttribute("data-gallery-filter"));
    });
  });

  renderGalleryItems("all");

  // Lightbox Close
  const lbModal = document.getElementById("lightboxModal");
  const lbClose = document.getElementById("closeLightboxBtn");
  if (lbClose && lbModal) {
    lbClose.addEventListener("click", () => lbModal.classList.remove("active"));
    lbModal.addEventListener("click", (e) => {
      if (e.target === lbModal) lbModal.classList.remove("active");
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lbModal?.classList.remove("active");
    }
  });
}

function renderGalleryItems(filter) {
  const grid = document.getElementById("studioGalleryGrid");
  if (!grid) return;

  const items = filter === "all"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.cat === filter);

  grid.innerHTML = items.map((item, idx) => `
    <figure class="gallery-card" data-idx="${idx}" data-src="${item.src}" data-title="${item.title}">
      <img src="${item.src}" alt="${item.title} - Serap Nail Art Bursa" class="${item.rotateFix ? "rotate-fix" : ""}" loading="lazy">
      <figcaption class="gallery-overlay">
        <span>${item.badge}</span>
        <strong>${item.title}</strong>
      </figcaption>
    </figure>
  `).join("");

  grid.querySelectorAll(".gallery-card").forEach((card) => {
    card.addEventListener("click", () => {
      const src = card.getAttribute("data-src");
      const title = card.getAttribute("data-title");
      openLightbox(src, title);
    });
  });
}

function openLightbox(src, title) {
  const lbModal = document.getElementById("lightboxModal");
  const lbImg = document.getElementById("lightboxImg");
  const lbTitle = document.getElementById("lightboxTitle");
  const lbWaBtn = document.getElementById("lightboxWhatsAppBtn");
  if (!lbModal || !lbImg) return;

  lbImg.src = src;
  lbImg.alt = title;
  if (lbTitle) lbTitle.textContent = title;
  if (lbWaBtn) {
    lbWaBtn.onclick = () => {
      openWhatsApp(`Merhaba Serap Hanım, web sitenizdeki galeride gördüğüm "${title}" uygulaması hakkında bilgi ve randevu almak istiyorum.`);
    };
  }
  lbModal.classList.add("active");
}

// FAQ Accordion
function initFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const btn = item.querySelector(".faq-question");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      items.forEach((i) => i.classList.remove("open"));
      if (!isOpen) item.classList.add("open");
    });
  });
}

// Helper: Open WhatsApp with Pre-filled Message
function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, "_blank", "noopener,noreferrer");
}
