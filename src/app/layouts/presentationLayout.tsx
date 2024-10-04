import { Layout } from "@/shared/ui/";
import { LayoutHeader } from "@/widgets/LayoutHeader";
import { SearchBar } from "@/shared/ui/";

export const presentationLayout = (
  <Layout 
    headerSlot={
      <LayoutHeader 
        // searchbarSlot={<SearchBar />} 
      />
    }
  />
);
