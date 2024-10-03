declare global {
  type Children = React.ReactNode;
  
  type Action = () => void;

  export type ID = string;

  export type Position = { x: number, y: number };

  /*
   * ⚠️ FSD
   *
   * This is a hacky way to export Redux types inferred from @/app
   * and use them in @/shared/model/hooks.ts
   */
  declare type RootState = import("@/app/appStore").RootState;
  declare type AppDispatch = import("@/app/appStore").AppDispatch;

}

export {}