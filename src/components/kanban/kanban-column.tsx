import React from "react";
import { KanbanCard } from "./kanban-card";
import { KanbanCardData } from "@/types/kanban-card-data";
import { cn } from "@/lib/utils";

interface KanbanColumnProps {
  title: string;
  cards: KanbanCardData[];
  focusedCardId: string | null;
  onFocusCard: (id: string) => void;
  onAddCardLeft: (id: string) => void;
  onAddCardRight: (id: string) => void;
  onDeleteCard: (id: string) => void;
  onConfigCard: (id: string) => void;
  bgTitleColor: string;
}

export function KanbanColumn({
  title,
  cards,
  focusedCardId,
  onFocusCard,
  onAddCardLeft,
  onAddCardRight,
  onDeleteCard,
  onConfigCard,
  bgTitleColor,
}: KanbanColumnProps) {
  const widthClass = "w-1/2";

  return (
    <div className="border border-gray-300 rounded p-2 m-2 flex-1">
      <h2
        className={cn(
          " mb-2 text-center text-white h-8 flex items-center justify-center"
        )}
        style={{ background: bgTitleColor }}
      >
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-2">
        {cards.map((card) => (
          <div key={card.id} className="w-full">
            <KanbanCard
              data={card}
              isFocused={focusedCardId === card.id}
              onFocus={() => onFocusCard(card.id)}
              onAddLeft={() => onAddCardLeft(card.id)}
              onAddRight={() => onAddCardRight(card.id)}
              onDelete={() => onDeleteCard(card.id)}
              onConfig={() => onConfigCard(card.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
