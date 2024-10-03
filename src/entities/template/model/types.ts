import type { ID } from "@/shared/model/types";

export type TemplateType = {
  id: ID,
  preview: string,
  title: string,
  author?: string,
}