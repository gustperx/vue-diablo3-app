type GlobalRouter = {
  to: string;
  name: string;
};

const headerLinks: GlobalRouter[] = [
  { to: "diablo3-home", name: "Home" },
  { to: "diablo3-about", name: "About" },
  { to: "https://github.com/gustperx/vue-diablo3-app", name: "Github" },
];

const footerLinks: GlobalRouter[] = [
  { to: "diablo3-home", name: "Home" },
  { to: "diablo3-about", name: "About" },
];

export { headerLinks, footerLinks };
