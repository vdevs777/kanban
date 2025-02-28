import Image from "next/image";
import { useState } from "react";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Menu,
  UserRound,
} from "lucide-react";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Avatar, AvatarImage } from "../ui/avatar";
import { useRouter } from "next/router";

import logoImg from "@/assets/logo.png";

type HeaderProps = {
  showMenu: () => void;
  showSheet: () => void;
};

export function Header({ showMenu, showSheet }: HeaderProps) {
  const router = useRouter();

  const [isChangeIcon, setChangeIcon] = useState(true);

  function changeIcon() {
    setChangeIcon(!isChangeIcon);
  }

  function actionsButton() {
    changeIcon();
    showMenu();
  }

  // useEffect(() => {
  //   const idFilial = sessionStorage.getItem("idFilial");
  //   console.log(idFilial);
  //   async function selectCurrentFilial() {
  //     idFilial &&
  //       !isNaN(Number(idFilial)) &&
  //       (await selectFilial(Number(idFilial)));
  //   }
  //   selectCurrentFilial();
  // }, []);

  return (
    <header className="w-full h-12 bg-white flex flex-row justify-between drop-shadow-sm z-50 pr-5">
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-row gap-4">
          <button
            className="hover:text-blue-400 hover:bg-white lg:block hidden pl-4"
            onClick={actionsButton}
          >
            {isChangeIcon ? (
              <ChevronLeft width={24} strokeWidth="1.5px" />
            ) : (
              <ChevronRight width={24} strokeWidth="1.5px" />
            )}
          </button>

          <button
            className="hover:text-blue-400 hover:bg-white lg:hidden block pl-4"
            onClick={showSheet}
          >
            <Menu width={24} strokeWidth="1.5px" />
          </button>
          <p className="font-bold xs:block hidden">Filial</p>
        </div>

        <button onClick={() => router.push("/")}>
          <Image src={logoImg} alt="Logo" width={50} height={20} />
        </button>
      </div>
      <div className="flex items-center font-normal flex-row-reverse gap-4">
        <Popover>
          <PopoverTrigger asChild className="hover: cursor-pointer gap-2">
            <div className="flex flex-row items-center hover:text-blue-400 gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src="https://ibaseminario.com.br/novo/wp-content/uploads/2013/09/default-avatar.png" />
              </Avatar>
              <span className="flex flex-row items-center text-sm text-slate-600 hover:text-blue-500">
                Admin
                <ChevronDown strokeWidth="1.5px" width={17} />
              </span>
            </div>
          </PopoverTrigger>
          <PopoverContent className="h-auto p-0 bg-white w-auto" align="end">
            <div className="flex flex-row justify-center pt-2 gap-4">
              <Avatar>
                <AvatarImage src="https://ibaseminario.com.br/novo/wp-content/uploads/2013/09/default-avatar.png" />
              </Avatar>
              <div className="flex flex-col gap-0.5">
                <p className="text-sm font-bold">Admin</p>
                <p className="text-sm text-gray-600">Super Administrator</p>
              </div>
            </div>
            <div className="flex flex-col start">
              <Button
                variant="ghost"
                className="w-[210px] justify-start items-center rounded-none gap-2 h-9 ring-0"
              >
                <UserRound strokeWidth="1.5px" width={20} /> Perfil
              </Button>
              <Button
                variant="ghost"
                className="w-auto justify-start items-center rounded-none gap-2 h-9"
              >
                <LogOut strokeWidth="1.5px" width={20} /> Sair
              </Button>
            </div>
          </PopoverContent>
        </Popover>
        <div className="flex items-center flex-row-reverse gap-4"></div>
      </div>
    </header>
  );
}
