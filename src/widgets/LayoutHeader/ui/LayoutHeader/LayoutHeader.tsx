import { Icon } from "@/shared/ui";
import { Logo } from "../Logo/Logo";

type Props = {
  searchbarSlot?: Children,
}

export function LayoutHeader(props: Props) {
  return (
    <header className="p-2 flex justify-between items-center gap-10 select-none">
      <div className="flex items-center flex-shrink-0">
        <Icon className="p-3 mx-1" type="menu" onClick={() => {}} />
        <Logo />
      </div>
      {props.searchbarSlot}
      <div className="min-[1039px]:max-w-[242px] max-w-[100px] w-full flex justify-end">
        <div className="flex items-center gap-3 mr-3">
          <Icon className="p-2" type="apps" onClick={() => {}} />
          <div className="w-8 h-8 bg-neutral-300 rounded-full p-2"></div>
        </div>
      </div>
    </header>
  );
}