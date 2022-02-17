class HeroData {
  public hero;
  public time;
  public classSlug;
  constructor(hero: string, time: number, classSlug: string) {
    this.hero = hero;
    this.time = time;
    this.classSlug = classSlug;
  }
}

export { HeroData };
