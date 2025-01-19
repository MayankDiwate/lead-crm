import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import { Separator } from "@/components/ui/separator";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex">
      <div className="hidden md:block min-w-60 max-w-60">
        <Sidebar />
      </div>
      <Separator orientation="vertical" />
      <div className="flex flex-col w-[calc(100%)] md:w-[calc(100%-245px)]">
        <Header />
        {children}
      </div>
    </div>
  );
}
