type GlobalRouter = {
  to: string;
  name: string;
};

const headerLinks: GlobalRouter[] = [
  { to: "home", name: "Home" },
  { to: "diablo3-home", name: "Diablo 3" },
  { to: "about", name: "About" },
];

const footerLinks: GlobalRouter[] = [
  { to: "home", name: "Home" },
  { to: "diablo3-home", name: "Diablo 3" },
  { to: "about", name: "About" },
];

export { headerLinks, footerLinks };
