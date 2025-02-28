import Link from "next/link";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Link = {
  icon: ReactNode;
  name: string;
  to: string;
};

type ConfigCardProps = {
  color: string;
  title: string;
  links: Link[];
};

export function ConfigCard({ color, title, links }: ConfigCardProps) {
  return (
    <div className="w-full h-auto flex flex-row drop-shadow-sm">
      <div
        className={cn(
          `h-auto w-1 rounded-tl-[8px] rounded-bl-[8px] drop-shadow-sm`,
          `bg-primary`
        )}
      ></div>
      <div className="bg-white py-6 pr-4 pl-7 flex flex-col rounded-tr-[8px] rounded-br-[8px] w-full drop-shadow-sm">
        <div>
          <h4 className="text-lg font-semibold">{title}</h4>
          <div className="flex flex-row flex-wrap gap-10">
            {links.map((link, index) => (
              <Link
                href={link.to}
                className={cn(
                  "flex flex-row items-center gap-1 h-9 relative hover:translate-x-2 transition-transform duration-300 text-primary"
                )}
                key={index}
              >
                {link.icon}
                <p className="text-blue-600 text-sm">{link.name}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
