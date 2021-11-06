const tabLinkItem = document.querySelectorAll(".tab-link");
const tabContentItem = document.querySelectorAll(".tab-content-item");

tabLinkItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    const dataKey = e.target.dataset.key;

    tabLinkItem.forEach((item) => item.classList.remove("active-link"));
    item.classList.add("active-link");

    tabContentItem.forEach((item) => {
      item.classList.add("dn");
      if (item.dataset.key === dataKey) {
        item.classList.remove("dn");
      }
    });
  });
});
