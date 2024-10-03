import type { ID, Position, Size } from "@/shared/model/types";

export type Item = {
  id: ID,
  position: Position,
  size: Size
  type: ItemType,
}

export type ItemType = TextBox | Image | Figure;

export type TextBox = {
  label: string,
  fontFamily: string,
  fontSize: number,
  fontColor: string,
  italic?: boolean,
  underline?: boolean,
  bold?: boolean,
}

export type Image = {
  src: string,
}

export type Figure = {
  shape: FigureShape,
  fillColor: string,
  strokeWidth: number,
  strokeColor: string,
}

export type FigureShape = "rectangle" | "triangle" | "star" | "circle";