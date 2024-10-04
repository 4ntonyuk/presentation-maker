import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { changeTitle } from "@/entities/presentation/model/slice";
;
export function Presentation() {
  const dispatch = useAppDispatch();
  const title = useAppSelector((state) => state.presentation.title);

  const handleTitleChange = (newTitle: string) => {
    dispatch(changeTitle(newTitle));
  };
  
  return (
    <div>
      <h1 className="font-bold text-3xl">{title}</h1>
      <br />
      <input
        value={title}
        onChange={(e) => handleTitleChange(e.target.value)}
        className="border border-black"
      />
    </div>
  )
}
