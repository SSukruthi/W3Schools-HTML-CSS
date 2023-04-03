
const contentDiv = document.getElementById("content");
const navLinks = document.querySelectorAll("nav a");

function goToPage(pageUrl) {
  fetch(pageUrl)
    .then(response => response.text())
    .then(html => {
      contentDiv.innerHTML = html;
      window.history.pushState({ pageUrl }, "", pageUrl);
    })
    .catch(error => {
      console.log(`Error loading ${pageUrl}: ${error}`);
    });
}

function loadPage(state) {
  const pageUrl = state ? state.pageUrl : "page1.html";
  goToPage(pageUrl);
}

window.addEventListener("popstate", event => {
  loadPage(event.state);
});

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault();
    const pageUrl = event.target.getAttribute("href");
    goToPage(pageUrl);
  });
});

loadPage();

