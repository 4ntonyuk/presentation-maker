import { Outlet, ScrollRestoration } from "react-router-dom";

type Props = {
  headerSlot: React.ReactNode,
  layoutsSlot: React.ReactNode,
}

export function Layout(props: Props) {
  return (
    <div>
      {props.headerSlot}
      <div className="bg-[#f2f3f5] w-full">
        <div className="container">
          {props.layoutsSlot}
        </div>
      </div>
      <Outlet />
      <ScrollRestoration />
    </div>
  )
}
