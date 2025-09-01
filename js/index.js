function showSidebar() {
    document.querySelector('.sidebar').classList.add('open');
}

function hideSidebar() {
    document.querySelector('.sidebar').classList.remove('open');
}

document.addEventListener("DOMContentLoaded", () => {
  function setupFeature(listSelector, imgSelector) {
      const list = document.querySelector(listSelector);
      const items = list ? list.querySelectorAll("li") : [];
      const img = document.querySelector(imgSelector);

      if (!list || !img) return;

      items.forEach(item => {
          const text = item.querySelector("p");

          item.addEventListener("click", () => {
              // reset all items
              items.forEach(i => {
                  i.classList.remove("active");
                  const t = i.querySelector("p");
                  if (t) t.style.maxHeight = "0";
              });

              // remove active to start fade-out
              img.classList.remove("active");

              // small delay to trigger fade-in after src change
              setTimeout(() => {
                  if (item.dataset.img) img.src = item.dataset.img;
                  img.classList.add("active");
              }, 50);

              // activate clicked item text
              item.classList.add("active");
              if (text) text.style.maxHeight = text.scrollHeight + "px";
          });
      });

      // initial state
      const firstActive = list.querySelector(".active");
      if (firstActive) {
          const text = firstActive.querySelector("p");
          if (text) text.style.maxHeight = text.scrollHeight + "px";
          if (firstActive.dataset.img) {
              img.src = firstActive.dataset.img;
              img.classList.add("active");
          }
      }
  }

  setupFeature("#walletList", "#walletPhone");
  setupFeature("#exchangeList", "#fiat");
  setupFeature("#exploreList", "#exploreImage");
});