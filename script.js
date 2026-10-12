```javascript
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
        navigation.classList.toggle("open");
    });
}

const year = document.querySelector("#year");

if (year) {
    year.textContent = new Date().getFullYear();
}
```
