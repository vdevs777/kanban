import { PageHeader } from "@/components/page-header";
import { CircleDollarSign } from "lucide-react";

export default function CommissionCreate() {
  return (
    <>
      <PageHeader
        icon={CircleDollarSign}
        title="Criar"
        path="Relatório / Comissão"
      />
    </>
  );
}
