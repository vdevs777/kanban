import {
  CircleDollarSign,
  Fish,
  Settings,
  ShieldPlus,
  User,
} from "lucide-react";
import { SidebarOpenButton } from "./buttons/sidebar-open-button";
import { SidebarSubButton } from "./buttons/sidebar-sub-button";
import { SidebarLabel } from "./sidebar-label";
import { SidebarButton } from "./buttons/sidebar-button";

type SidebarProps = {
  inDialog?: boolean;
};

export function Sidebar({ inDialog = false }: SidebarProps) {
  return (
    <div className={`${inDialog ? "block" : "lg:block hidden"}`}>
      <div className="max-w-[236px] min-w-[236px] min-h-[92vh] h-full bg-neutral-50 flex flex-col pt-8">
        <section className="pt-2">
          <SidebarLabel text="Relatório" />
          <SidebarOpenButton
            icon={CircleDollarSign}
            sectionName="commission"
            text="Comissão"
          >
            <SidebarSubButton
              text="Listar"
              url="/report/commission/list"
              className="ml-9"
            />
            <SidebarSubButton
              text="Criar"
              url="/report/commission/create"
              className="ml-9"
            />
          </SidebarOpenButton>
          <SidebarButton
            icon={Fish}
            path="/report/production-analysis"
            text="Análise de produção"
          />
        </section>
        <section className="pt-2">
          <SidebarLabel text="Sistema" />
          <SidebarOpenButton
            icon={ShieldPlus}
            sectionName="permissions"
            text="Permissões"
          >
            <SidebarSubButton
              text="Usuários"
              url="/system/permissions/users"
              className="ml-9"
            />
          </SidebarOpenButton>
          <SidebarButton
            path="/system/config"
            icon={Settings}
            text="Configurações"
          />
        </section>
      </div>
    </div>
  );
}
