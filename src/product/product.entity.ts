export class ProductEntity {
  constructor(
    readonly id: string,
    readonly userId: string,
    readonly name: string,
    readonly value: number,
    readonly quantity: number,
    readonly description: string,
    readonly category: string,
    readonly details: { name: string; description: string }[],
    readonly images: { url: string; description: string }[],
  ) {}
}
