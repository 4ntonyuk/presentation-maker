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

type Props = {
  className?: string,
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void,
  type: IconType,
}

export function Icon(props: Props) {
  const { className, onClick, type } = props;


  return (
    <div 
      className={`select-none hover:bg-[#00000010] rounded-full transition-all duration-300 ${onClick && "cursor-pointer"} ${className}`} 
      onClick={onClick}
    >
      <img src={`/icons/${type}.svg`} width={24} height={24} />
    </div>
  );
}