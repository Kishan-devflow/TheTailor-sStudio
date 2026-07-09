const defaultConfig = {
  brand_tagline: "Tailored to You",
  hero_title: "Your Perfect Fit Awaits",
  hero_subtitle:
    "Custom tailoring that celebrates your style and body. Book, measure, and wear with confidence.",
  booking_title: "Book Your Appointment",
  booking_desc:
    "Schedule a time that works for you. Our expert tailors are ready to bring your vision to life with precision and care.",
  reviews_title: "Customer Reviews",
  measure_title: "Get Measured",
  measure_desc:
    "Professional measurements ensure your garments fit flawlessly. Let us take your measurements for the perfect custom fit.",
};

let config = { ...defaultConfig };

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", (event) => {
    const clickedInsideMenu = mobileMenu.contains(event.target);
    const clickedMenuButton = mobileMenuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
      mobileMenu.classList.add("hidden");
    }
  });
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", () => {
    if (mobileMenu && !mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }
  });
});

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange: async (newConfig) => {
      config = newConfig;
      document.getElementById("brandTagline").textContent =
        config.brand_tagline || defaultConfig.brand_tagline;
      document.getElementById("heroTitle").textContent =
        config.hero_title || defaultConfig.hero_title;
      document.getElementById("heroSubtitle").textContent =
        config.hero_subtitle || defaultConfig.hero_subtitle;
      document.getElementById("bookingTitle").textContent =
        config.booking_title || defaultConfig.booking_title;
      document.getElementById("bookingDesc").textContent =
        config.booking_desc || defaultConfig.booking_desc;
      document.getElementById("reviewsTitle").textContent =
        config.reviews_title || defaultConfig.reviews_title;
      document.getElementById("measureTitle").textContent =
        config.measure_title || defaultConfig.measure_title;
      document.getElementById("measureDesc").textContent =
        config.measure_desc || defaultConfig.measure_desc;
    },
    mapToCapabilities: () => ({
      recolorables: [],
      borderables: [],
      fontEditable: undefined,
      fontSizeable: undefined,
    }),
    mapToEditPanelValues: () =>
      new Map([
        [
          "brand_tagline",
          config.brand_tagline || defaultConfig.brand_tagline,
        ],
        ["hero_title", config.hero_title || defaultConfig.hero_title],
        [
          "hero_subtitle",
          config.hero_subtitle || defaultConfig.hero_subtitle,
        ],
        [
          "booking_title",
          config.booking_title || defaultConfig.booking_title,
        ],
        ["booking_desc", config.booking_desc || defaultConfig.booking_desc],
        [
          "reviews_title",
          config.reviews_title || defaultConfig.reviews_title,
        ],
        [
          "measure_title",
          config.measure_title || defaultConfig.measure_title,
        ],
        ["measure_desc", config.measure_desc || defaultConfig.measure_desc],
      ]),
  });
}

if (window.lucide) {
  window.lucide.createIcons();
}
