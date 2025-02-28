import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface PageHeaderProps {
  path?: string;
  title: string | ReactNode;
  icon: LucideIcon;
}

export function PageHeader({ icon: Icon, path, title }: PageHeaderProps) {
  return (
    <div className="h-[92px] flex">
      <div className="max-h-12 flex items-center gap-4">
        <div
          className={`w-10 h-10 bg-primary text-white rounded-sm flex items-center justify-center`}
        >
          <Icon />
        </div>
        <div>
          <span className="text-base text-blue-500">{path}</span>
          <p className="font-bold text-xl text-slate-800 ">{title}</p>
        </div>
      </div>
    </div>
  );
}
