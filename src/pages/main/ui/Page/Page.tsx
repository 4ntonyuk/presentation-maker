import { templates } from "@/shared/lib/templates";
import { TemplateList } from "@/widgets/TemplateList";

export function Main() {
  return (
    <div>
      <div className="bg-[#f2f3f5] w-full">
        <div className="container">
          <TemplateList 
            templates={templates}
          />
        </div>
      </div>
    </div>
  );
}
