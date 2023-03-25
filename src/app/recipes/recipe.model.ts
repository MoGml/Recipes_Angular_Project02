export class Recipe {
  public name: string;
  public description: string;
  public picturePath: string;

  constructor(name: string, desc: string, picturePath: string) {
    this.name = name;
    this.description = desc;
    this.picturePath = picturePath;
  }
}
