import { KanbanCardData } from "@/types/kanban-card-data";
import { Plus, Settings, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

interface KanbanCardProps {
  data: KanbanCardData;
  isFocused: boolean;
  onFocus: () => void;
  onAddLeft: () => void;
  onAddRight: () => void;
  onDelete: () => void;
  onConfig: () => void;
}
export function KanbanCard({
  data,
  isFocused,
  onFocus,
  onAddLeft,
  onAddRight,
  onDelete,
  onConfig,
}: KanbanCardProps) {
  return (
    <div
      tabIndex={0}
      onClick={onFocus}
      className={`relative m-2  border p-4 shadow transition-colors aspect-square hover:cursor-pointer
              focus:outline-none flex flex-col
              ${isFocused ? "border-blue-500" : "border-gray-300"} ${
        !isFocused && "rounded"
      }
              `}
    >
      <div className="flex flex-col flex-grow">
        <div className="flex flex-row justify-between items-center w-full">
          <div className="flex flex-col">
            <p>Peso:</p>
            <p className="font-bold text-2xl">15.600KG</p>
          </div>
          <Avatar>
            <AvatarFallback>MF</AvatarFallback>
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
        </div>

        <div className="pt-3 flex-grow">
          <p>Responsável:</p>
          <p className="text-gray-500">Iotar Dias Júnior</p>
        </div>

        {/* Essa div agora pega o espaço restante e fica centralizada */}
        <div className="flex gap-2 justify-center items-center flex-grow">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onConfig();
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <Settings size={18} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      {isFocused && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddLeft();
            }}
            className="absolute top-1/2 left-[-16px] -translate-y-1/2 h-full w-6 bg-green-200 
                       flex items-center justify-center border border-green-500
                       hover:bg-green-300 "
          >
            <Plus size={16} className="text-green-700" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddRight();
            }}
            className="absolute top-1/2 right-[-16px] -translate-y-1/2 h-full w-6 bg-green-200 
                       flex items-center justify-center border border-green-500
                       hover:bg-green-300 "
          >
            <Plus size={16} className="text-green-700" />
          </button>
        </>
      )}
    </div>
  );
}
