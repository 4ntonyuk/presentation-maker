import { Icon } from "@/shared/ui"
import { Template } from "@/entities/Template";
import { TemplateType } from "@/entities/Template/model/types";

type Props = {
  templates: TemplateType[],
}

export function LayoutList(props: Props) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center font-gs py-3 mx-2">
        <h4 className="text-[#202124] flex-1">Создать презентацию</h4>
        <div className="flex gap-[6px] items-center cursor-pointer">
          <div className="flex items-center gap-1 pl-3 pr-1 py-[6px] rounded-[4px] hover:bg-[#00000010] transition-all duration-300">
            <p className="text-[#414549] text-[15px] font-gs font-medium">Галерея шаблонов</p>
            <Icon type="unfold" />
          </div>
          <div className="bg-[#dadce0] h-8 w-px opacity-55"></div>
          <Icon className="p-2" type="more-vert" onClick={() => {}} />
        </div>
      </div>
      <div className="flex justify-between overflow-x-hidden">
        {props.templates.map((template, index) => (
          <Template 
            key={index}
            template={template}
            className={`${index == 5 && "max-lg:hidden"} ${index == 4 && "max-md:hidden"}`}
          />
        ))}
      </div>
    </div>
  );
} 