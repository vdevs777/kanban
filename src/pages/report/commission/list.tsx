import { PageHeader } from "@/components/page-header";
import { CircleDollarSign } from "lucide-react";

export default function CommissionList() {
  return (
    <>
      <PageHeader
        icon={CircleDollarSign}
        title="Lista"
        path="Relatório / Comissão"
      />
    </>
  );
}
