document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".join-faq-item");
  if (!faqItems.length) return;

  faqItems.forEach((item) => {
    const summary = item.querySelector(".join-faq-summary");
    const content = item.querySelector(".join-faq-body");

    content.style.overflow = "hidden";
    if (!item.hasAttribute("open")) content.style.maxHeight = "0";

    summary.addEventListener("click", (e) => {
      e.preventDefault();
      const isOpen = item.hasAttribute("open");

      // Close others
      faqItems.forEach((el) => {
        if (el !== item) {
          el.removeAttribute("open");
          const c = el.querySelector(".join-faq-body");
          c.style.maxHeight = "0";
        }
      });

      if (!isOpen) {
        item.setAttribute("open", "");
        content.style.maxHeight = content.scrollHeight + "px";

        const offset = 80;
        const y =
          item.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      } else {
        item.removeAttribute("open");
        content.style.maxHeight = "0";
      }
    });
  });
});
