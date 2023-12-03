// Tutaj skopiuj kod zadania
export class GiftRegistry {
  gifts: Map<number, string[]>;

  constructor() {
    this.gifts = new Map();
  }

  addGift(id_child: number, gift: string) {
    if (!this.gifts.has(id_child)) {
      this.gifts.set(id_child, []);
    }

    let currentChildList = this.gifts.get(id_child);

    currentChildList?.push(gift);
  }
  removeGift(id_child: number, gift: string) {
    let currentChildList = this.gifts.get(id_child);

    if (!currentChildList) {
      throw new Error("kid not found");
    }

    const indexSearchedGift = currentChildList.indexOf(gift);

    if (indexSearchedGift === -1) {
      throw new Error("Gift not found");
    }
    currentChildList.splice(indexSearchedGift, 1);
  }
  getGiftsForChild(id_child: number) {
    if (!this.gifts.get(id_child)) {
      throw new Error("This list of present for current child doesnt exist");
    }

    return this.gifts.get(id_child);
  }
}
