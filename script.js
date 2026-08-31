const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

// Mobile menu

menuButton.addEventListener("click", () => {

```
navigation.classList.toggle("active");
```

});

// Close mobile menu after clicking a link

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(link => {

```
link.addEventListener("click", () => {

    navigation.classList.remove("active");

});
```

});

// Current year

document.getElementById("year").textContent =
new Date().getFullYear();

// Small reveal animation

const revealElements =
document.querySelectorAll(
".service-card, .project-card, .about-content, .terminal"
);

const observer = new IntersectionObserver(

```
entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

        }

    });

},

{
    threshold: 0.12
}
```

);

revealElements.forEach(element => {

```
element.classList.add("reveal");

observer.observe(element);
```

});
