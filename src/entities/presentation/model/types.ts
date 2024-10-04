import type { ID } from "@/shared/model/types";
import type { Slide } from "@/entities/slide/@x/presentation"

export type Presentation = {
  title: string,
  slides: Array<Slide>,
  selectedSlides: Array<ID>,
}