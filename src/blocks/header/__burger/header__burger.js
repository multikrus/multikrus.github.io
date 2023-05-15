const burgerClass4Header = "header_burger-menu_opened";

export default function addListener2BurgerIcon() {
    const burgerIcon = document.querySelector(".header__burger");
    const burgerMenu = document.querySelector(".burger-menu");
    const header = document.querySelector(".header");
    const headerMenu = header.querySelector(".header__menu");
    const html = document.querySelector("html");

    if (!(burgerIcon || burgerMenu || header || headerMenu)) {
        return;
    }

    // Теоретически возможен такой кейс: у пользователя в портретном режиме отображается мобильная версия и он
    // в ней открыл бургер-меню. Потом экран сменился на альбомный и вёрстка стала десктопной, но бургер-меню
    // осталось висеть, что выглядит коряво, поэтому в подобном кейсе закрываем его
    const windowResizeHandler = function () {
        const isMobileHeader = getComputedStyle(headerMenu).display === "none";
        if (!isMobileHeader) {
            const {headerHeight, burgerMenuHeight} = getHeights(html, burgerMenu);
            closeBurgerMenu(header, burgerMenu, headerHeight, burgerMenuHeight);
            window.removeEventListener("resize", windowResizeHandler);
        }
    }

    burgerIcon.addEventListener("click", () => {
        // Т.к. значения css переменных могут измениться в ходе работы с сайтом, то обращения к ним целесообразно
        // проводить в момент клика по иконке
        const {headerHeight, burgerMenuHeight} = getHeights(html, burgerMenu);

        const isBurgerMenuOpened = header.classList.contains(burgerClass4Header);
        if (isBurgerMenuOpened) {
            closeBurgerMenu(header, burgerMenu, headerHeight, burgerMenuHeight);
            window.removeEventListener("resize", windowResizeHandler);
        } else {
            openBurgerMenu(header, burgerMenu, headerHeight, burgerMenuHeight);
            window.addEventListener("resize", windowResizeHandler);
        }
    });
}

function openBurgerMenu(header, burgerMenu, headerHeight, burgerMenuHeight) {
    header.classList.add(burgerClass4Header);
    burgerMenu.style.top = `${headerHeight - burgerMenuHeight}px`;
    requestAnimationFrame(() => {
        burgerMenu.style.opacity = "1";
        burgerMenu.style.top = `${headerHeight + 1}px`;
    });
}

function closeBurgerMenu(header, burgerMenu, headerHeight, burgerMenuHeight) {
    header.classList.remove(burgerClass4Header);
    burgerMenu.style.opacity = "0";
    burgerMenu.style.top = `${headerHeight - burgerMenuHeight}px`
}

function getHeights(html, burgerMenu) {
    return {
        "headerHeight": parseInt(getComputedStyle(html).getPropertyValue("--header-height")),
        "burgerMenuHeight": Math.round(burgerMenu.getBoundingClientRect().height),
    };
}