const burgerClass4Header = "header_burger-menu_opened";

export default function addListener2BurgerIcon() {
    const burgerIcon = document.querySelector(".header__burger");
    const burgerMenu = document.querySelector(".burger-menu");
    const header = document.querySelector(".header");
    const html = document.querySelector("html");

    if (!(burgerIcon || burgerMenu || header)) {
        return;
    }

    burgerIcon.addEventListener("click", () => {
        // Т.к. значения css переменных могут измениться в ходе работы с сайтом, то обращения к ним целесообразно
        // проводить в момент клика по иконке
        const headerHeight = parseInt(getComputedStyle(html).getPropertyValue("--header-height"));
        if (!headerHeight) {
            return;
        }

        const burgerMenuHeight = Math.round(burgerMenu.getBoundingClientRect().height);
        const isBurgerMenuOpened = header.classList.contains(burgerClass4Header);
        if (isBurgerMenuOpened) {
            closeBurgerMenu(header, burgerMenu, headerHeight, burgerMenuHeight);
        } else {
            openBurgerMenu(header, burgerMenu, headerHeight, burgerMenuHeight);
        }
    });
}

function openBurgerMenu(header, burgerMenu, headerHeight, burgerMenuHeight) {
    header.classList.add(burgerClass4Header);
    burgerMenu.style.top = `${headerHeight - burgerMenuHeight}px`;
    window.requestAnimationFrame(() => {
        burgerMenu.style.opacity = "1";
        burgerMenu.style.top = `${headerHeight + 1}px`;
    });
}

function closeBurgerMenu(header, burgerMenu, headerHeight, burgerMenuHeight) {
    header.classList.remove(burgerClass4Header);
    burgerMenu.style.opacity = "0";
    burgerMenu.style.top = `${headerHeight - burgerMenuHeight}px`
}