$(".owl-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 800,
  loop: false,
  dots: true,
  margin: 10,
  nav: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});

const startYear = 2023;
const currentYear = new Date().getFullYear();
const yearRange =
  startYear === currentYear ? `${currentYear}` : `${startYear}-${currentYear}`;
document.getElementById("year-range").textContent = yearRange;
