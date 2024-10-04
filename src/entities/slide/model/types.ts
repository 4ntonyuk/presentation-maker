import type { ID } from "@/shared/model/types";
import type { Item } from "@/entities/item/@x/slide";

export type Slide = {
  id: ID,
  background?: string,
  items: Item[],
  selectedItems: Array<Item>,
}