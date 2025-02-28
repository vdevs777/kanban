import { ReactNode, useState } from "react";
import { Header } from "../header/header";
import { Sidebar } from "../sidebar/sidebar";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

type LayoutProps = {
  children: ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const [isShowMenu, setIsShowMenu] = useState(true);
  const [isShowSheet, setIsShowSheet] = useState(false);

  function showMenu() {
    setIsShowMenu(!isShowMenu);
  }

  function showSheet() {
    setIsShowSheet(!isShowSheet);
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header showMenu={showMenu} showSheet={showSheet} />
      <div className="flex flex-1">
        {isShowMenu && <Sidebar />}
        <Sheet open={isShowSheet} onOpenChange={setIsShowSheet}>
          <SheetTrigger asChild></SheetTrigger>
          <SheetContent
            side="left"
            hasClose={false}
            className="mt-12 p-0 w-[236px] h-full"
          >
            <Sidebar inDialog />
          </SheetContent>
        </Sheet>
        <div className="bg-slate-100 w-full">
          <div className="p-5">{children}</div>
        </div>
      </div>
      <footer className="bg-neutral-50 h-auto text-xs py-1 flex items-center justify-center">
        © 2025 IotarJR &&nbsp;
        <a
          href="https://github.com/vdevs777"
          className="text-blue-600 hover:underline hover:cursor-pointer"
        >
          vdevs777
        </a>
      </footer>
    </div>
  );
}
