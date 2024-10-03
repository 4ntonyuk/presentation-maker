import { useEffect, useState } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { ErrorBox } from "@/shared/ui";

type Props = {
  headerSlot: Children,
  templatesSlot?: Children,
}

export function Layout(props: Props) {
  const [currentWidth, setCurrentWidth] = useState<number>(1400);

  const widthHandler = () => {
    const width = window.innerWidth;
    setCurrentWidth(width);
    console.log(currentWidth);
  }  
  useEffect(widthHandler, []);
  window.addEventListener("resize", widthHandler);

  return (
    <>
      {(currentWidth > 765) ? (
        <>
          {props.headerSlot}
          <Outlet />
          <ScrollRestoration />
        </>
      ) : (
        <ErrorBox 
          errorText="Это приложение не поддерживает такое разрешение устройства"
        />
      )}
    </>
  )
}
