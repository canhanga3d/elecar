const navMenu = document.querySelector<HTMLDivElement>("#nav-menu")!;
const navToggle = document.querySelector<HTMLDivElement>("#nav-toggle")!;
const navClose = document.querySelector<HTMLDivElement>("#nav-close")!;
//const userEvent: Array<string> = ['click', 'touchstart'];
const userEvent: string[] = ["click", "touchstart"];
function toggleMenu(event: Event): void {
  event.preventDefault();
  navMenu.classList.toggle("show-menu");
}

function handleMenuEvent(event: Event): void {
  const target = event.target as HTMLElement;
  const anchor = target.closest("a");
  const listItem = target.closest("li");
  if (anchor && listItem) {
    toggleMenu(event);
  }
  navMenu.removeEventListener(event.type, handleMenuEvent);
}

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navMenu && navToggle && navClose) {
  userEvent.forEach((event: string) => {
    navToggle.addEventListener(event, toggleMenu);
  });

  /*===== MENU HIDDEN =====*/
  /* Validate if constant exists */

  userEvent.forEach((event: string) => {
    navClose.addEventListener(event, toggleMenu);
  });

  userEvent.forEach((event: string) => {
    navMenu.addEventListener(event, handleMenuEvent);
  });
}
