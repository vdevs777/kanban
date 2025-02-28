import { PageHeader } from "@/components/page-header";
import { ShieldPlus } from "lucide-react";

export default function Users() {
  return (
    <PageHeader
      icon={ShieldPlus}
      title="Usuários"
      path="Sistema / Permissões"
    />
  );
}
