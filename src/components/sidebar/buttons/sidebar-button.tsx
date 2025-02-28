import { Button } from "@/components/ui/button";
import { LucideIcon, SlidersHorizontal } from "lucide-react";
import { useRouter } from "next/router";

interface SidebarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  icon: LucideIcon;
  path: string;
  pathSplit?: number;
}

export function SidebarButton({
  icon: Icon,
  path,
  text,
  pathSplit = 2,
  ...rest
}: SidebarButtonProps) {
  const router = useRouter();

  const sectionName = path.split("/").at(-1);

  return (
    <Button
      className={`w-full font-normal h-8 rounded-none flex justify-start gap-4  bg-neutral-50 text-primary hover:text-white hover:bg-primary ${
        router.asPath.split("/")[pathSplit] === sectionName &&
        "bg-primary text-white"
      }`}
      {...rest}
      onClick={() => router.push(path)}
    >
      <Icon strokeWidth="1.5px" width={20} /> {text}
    </Button>
  );
}
