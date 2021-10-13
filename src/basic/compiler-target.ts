class AnimalTwo {
  protected name: string

  constructor(name: string) {
    this.name = name;
  }

  public move(distanceInMm: number): void {
    console.log(`${this.name} se moveu ${distanceInMm}`)
  }
}