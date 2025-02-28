import { KanbanCardData } from "@/types/kanban-card-data";
import { Plus, Settings, Trash2 } from "lucide-react";

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
      className={`relative m-2 rounded border p-4 shadow transition-colors 
                  focus:outline-none 
                  ${isFocused ? "border-blue-500" : "border-gray-300"} 
                  `}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">{data.title}</h3>
        <div className="flex gap-2">
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
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full 
                       bg-white border border-gray-300 rounded p-1
                       hover:bg-gray-100"
          >
            <Plus size={16} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddRight();
            }}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-full 
                       bg-white border border-gray-300 rounded p-1
                       hover:bg-gray-100"
          >
            <Plus size={16} />
          </button>
        </>
      )}
    </div>
  );
}
