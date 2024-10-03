import { TemplateType } from "@/entities/Template/model/types";

type Props = {
  template: TemplateType,
  className?: string,
  action?: Action,
}

export function Template(props: Props) {
  const { template, className, action } = props;
  return (
    <div
      className={`flex-shrink-0 overflow-x-hidden flex flex-col gap-2 select-none lg:w-[171px] md:w-[165px] w-[152px] cursor-pointer pb-5 ${className}`}
      onClick={action}
    >
      <img 
        src={template.preview}
        alt={template.title} 
        width={400}
        height={225}
        className="lg:h-[98px] md:h-[92px] h-[82px] w-full border border-[#dbdcde] rounded-[4px] hover:border-[#F7C638] transition duration-300"
      />
      <p className="text-sm font-roboto font-medium text-[#202124] mx-1 whitespace-nowrap overflow-hidden overflow-ellipsis">
        {template.title}
        {template.author && (
          <div className="font-normal text-sm text-[#5f6368]">
            <span>автор:</span>&nbsp;
            <a href="#!" className="hover:underline transition duration-300">
              {template.author}
            </a>
          </div>
      )}
      </p>
    </div>
  );
}