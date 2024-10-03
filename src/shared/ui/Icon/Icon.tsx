type IconType = "apps"
              | "close"
              | "folder"
              | "grid"
              | "home"
              | "list"
              | "logout"
              | "menu"
              | "more-horiz"
              | "more-vert"
              | "presentation"
              | "search"
              | "settings"
              | "sort"
              | "unfold"

type Props = {
  className?: string,
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
  type: IconType,
}

export function Icon(props: Props) {
  const { className, onClick, type } = props;


  return (
    <div 
      className={`select-none rounded-full transition-all duration-300 flex-shrink-0 ${onClick && "cursor-pointer hover:bg-[#00000010]"} ${className}`} 
      onClick={onClick}
    >
      <img src={`/icons/${type}.svg`} width={24} height={24} />
    </div>
  );
}