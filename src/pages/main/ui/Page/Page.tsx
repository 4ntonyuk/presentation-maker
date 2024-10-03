import { templates } from "@/shared/lib/templates";
import { LayoutList } from "@/widgets/LayoutList";

export function Main() {
  return (
    <div>
      <div className="bg-[#f2f3f5] w-full">
        <div className="container">
          <LayoutList 
            templates={templates}
          />
        </div>
      </div>
    </div>
  );
}
