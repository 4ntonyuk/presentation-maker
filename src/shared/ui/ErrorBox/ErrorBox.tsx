type Props = {
  errorText: string,
}

export function ErrorBox(props: Props) {
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <div className="relative max-w-[500px] w-full bg-neutral-100 rounded-xl">
        <h2 className="font-gs font-medium text-lg px-3 py-1 text-center bg-red-300 border-2 border-red-800 rounded-xl">Error</h2>
        <p className="text-sm px-3 py-5">{props.errorText}</p>
      </div>
    </div>
  )
}