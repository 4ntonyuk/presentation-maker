import { Layout } from "@/shared/ui/";
import { LayoutHeader } from "@/widgets/LayoutHeader";
import { SearchBar } from "@/shared/ui/";

export const baseLayout = (
  <Layout 
    headerSlot={
      <LayoutHeader 
        leftSlot={<div></div>}
        rightSlot={<div></div>}
        searchbarSlot={<SearchBar />} 
      />
    }
  />
);
