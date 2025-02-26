import React, { useState } from "react";
import KanbanColumn from "./kanban-column";
import { KanbanCardData } from "@/types/kanban-card-data";
import { v4 as uuidv4 } from "uuid";
import { red, blue, green } from "tailwindcss/colors";

export default function Kanban() {
  // Exemplo de dados iniciais em cada coluna
  const [colPedidos, setColPedidos] = useState<KanbanCardData[]>([
    { id: uuidv4(), title: "Recepção - Pedido 1" },
    { id: uuidv4(), title: "Acúmulo - Pedido 2" },
  ]);

  const [colEmProgresso, setColEmProgresso] = useState<KanbanCardData[]>([
    { id: uuidv4(), title: "Pesagem Inicial - Lote A" },
    { id: uuidv4(), title: "Pesagem Final - Lote A" },
  ]);

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
    if (colPedidos.some((card) => card.id === id)) {
      addCardToColumn(setColPedidos, id, "left");
    } else if (colEmProgresso.some((card) => card.id === id)) {
      addCardToColumn(setColEmProgresso, id, "left");
    } else {
      addCardToColumn(setColConcluidos, id, "left");
    }
  }

  function handleAddCardRight(id: string) {
    if (colPedidos.some((card) => card.id === id)) {
      addCardToColumn(setColPedidos, id, "right");
    } else if (colEmProgresso.some((card) => card.id === id)) {
      addCardToColumn(setColEmProgresso, id, "right");
    } else {
      addCardToColumn(setColConcluidos, id, "right");
    }
  }

  function handleDeleteCard(id: string) {
    setColPedidos((prev) => prev.filter((card) => card.id !== id));
    setColEmProgresso((prev) => prev.filter((card) => card.id !== id));
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
          title="ÁREA DE PEDIDOS"
          cards={colPedidos}
          focusedCardId={focusedCardId}
          onFocusCard={handleFocusCard}
          onAddCardLeft={handleAddCardLeft}
          onAddCardRight={handleAddCardRight}
          onDeleteCard={handleDeleteCard}
          onConfigCard={handleConfigCard}
          bgTitleColor={red[500]}
        />

        <KanbanColumn
          title="ÁREA DE EM PROGRESSO"
          cards={colEmProgresso}
          focusedCardId={focusedCardId}
          onFocusCard={handleFocusCard}
          onAddCardLeft={handleAddCardLeft}
          onAddCardRight={handleAddCardRight}
          onDeleteCard={handleDeleteCard}
          onConfigCard={handleConfigCard}
          bgTitleColor={green[500]}
        />

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
