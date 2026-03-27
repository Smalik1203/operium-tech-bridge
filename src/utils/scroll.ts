export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  const navbar = document.querySelector('nav');
  if (element && navbar) {
    const navbarHeight = navbar.getBoundingClientRect().height;
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};
