import React, { useState } from "react";
import { KanbanColumn } from "./kanban-column";
import { KanbanCardData } from "@/types/kanban-card-data";
import { v4 as uuidv4 } from "uuid";
import { red, blue, green } from "tailwindcss/colors";

export function Kanban() {
  const [colConcluidos, setColConcluidos] = useState<KanbanCardData[]>([
    { id: uuidv4(), title: "Acabamento - Projeto X" },
    { id: uuidv4(), title: "Glaciamento - Projeto X" },
    { id: uuidv4(), title: "Embalagem - Projeto X" },
  ]);

  const [focusedCardId, setFocusedCardId] = useState<string | null>(null);

  function handleFocusCard(id: string) {
    setFocusedCardId(id);
  }

  function addCardToColumn(
    columnSetter: React.Dispatch<React.SetStateAction<KanbanCardData[]>>,
    referenceId: string,
    position: "left" | "right"
  ) {
    columnSetter((prev) => {
      const newCard = { id: uuidv4(), title: "Novo Card" };
      const refIndex = prev.findIndex((c) => c.id === referenceId);
      if (refIndex === -1) return prev;

      const newArray = [...prev];
      if (position === "left") {
        newArray.splice(refIndex, 0, newCard);
      } else {
        newArray.splice(refIndex + 1, 0, newCard);
      }
      return newArray;
    });
  }

  function handleAddCardLeft(id: string) {
    addCardToColumn(setColConcluidos, id, "left");
  }

  function handleAddCardRight(id: string) {
    addCardToColumn(setColConcluidos, id, "right");
  }

  function handleDeleteCard(id: string) {
    setColConcluidos((prev) => prev.filter((card) => card.id !== id));

    if (focusedCardId === id) {
      setFocusedCardId(null);
    }
  }

  function handleConfigCard(id: string) {
    alert(`Abrir configurações do card: ${id}`);
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex gap-4">
        <KanbanColumn
          title="ÁREA DE CONCLUÍDOS"
          cards={colConcluidos}
          focusedCardId={focusedCardId}
          onFocusCard={handleFocusCard}
          onAddCardLeft={handleAddCardLeft}
          onAddCardRight={handleAddCardRight}
          onDeleteCard={handleDeleteCard}
          onConfigCard={handleConfigCard}
          bgTitleColor={blue[500]}
        />
      </div>
    </div>
  );
}
