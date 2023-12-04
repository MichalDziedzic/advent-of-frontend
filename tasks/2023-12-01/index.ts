// Tutaj skopiuj kod zadania
export class GiftRegistry {
  #gifts: Map<number, string[]>;

  constructor() {
    this.#gifts = new Map();
  }

  addGift(id_child: number, gift: string): void {
    if (!this.#gifts.has(id_child)) {
      this.#gifts.set(id_child, []);
    }

    const currentChildList = this.#gifts.get(id_child);
    currentChildList?.push(gift);
  }
  removeGift(id_child: number, gift: string): void {
    const currentChildList = this.#gifts.get(id_child);

    if (!currentChildList) {
      throw new Error("kid not found");
    }

    const indexSearchedGift = currentChildList.indexOf(gift);

    if (indexSearchedGift === -1) {
      throw new Error("Gift not found");
    }
    currentChildList.splice(indexSearchedGift, 1);
  }
  getGiftsForChild(id_child: number): Array<string> {
    const res = this.#gifts.get(id_child);

    if (!res) {
      throw new Error("This list of present for current child doesnt exist");
    }

    return res;
  }
}
