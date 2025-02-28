import { ConfigCard } from "@/components/config/config-card";
import { PageHeader } from "@/components/page-header";
import { RefreshCcw, Settings } from "lucide-react";
import { purple } from "tailwindcss/colors";

export default function Config() {
  return (
    <>
      <PageHeader icon={Settings} title="Configurações" />
      <div className="flex flex-col gap-4">
        <ConfigCard
          color={purple[500]}
          title="Relatório"
          links={[
            {
              icon: <RefreshCcw size={20} />,
              name: "Fluxo de Trabalho",
              to: "/system/config/workflow",
            },
          ]}
        />
      </div>
    </>
  );
}
