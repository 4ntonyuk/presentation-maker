type Props = {
  label?: boolean,
  className?: string,
}

export function Logo({ label = false, ...props }: Props) {
  return (
    <a className="flex items-center gap-2 flex-shrink-0" href="/">
      <img className={props.className} src="/images/presentation.png" alt="logo" width={40} height={40} />
      {label && (
        <h2 className="font-ps text-[22px] text-[#1f1f1f]">Презентации</h2>
      )}
    </a>
  );
}
