
import React, { useState } from "react";
import { CaptureTarget } from "../types";
import { addTextToStudio } from "../core/studioFunnel";

export default function InjectButton({
  captureTarget,
  title,
  content,
  className = "absolute top-6 right-6 p-3 bg-amber-500 text-white rounded-xl shadow-lg z-20 transition-all active:scale-95 shadow-[0_0_15px_rgba(245,158,11,0.5)]"
}: {
  captureTarget?: CaptureTarget | null;
  title: string;
  content: string;
  className?: string;
}) {
  const [clicked, setClicked] = useState(false);

  if (!captureTarget) return null;

  const handleClick = () => {
    setClicked(true);
    addTextToStudio(`[${title}]\n${content}`);
    setTimeout(() => setClicked(false), 800);
  };

  return (
    <button
      onClick={handleClick}
      className={`${className} ${clicked ? 'bg-emerald-500 scale-90 rotate-12' : ''}`}
      title="Injetar no alvo travado"
    >
      {clicked ? '✓' : '🎯'}
    </button>
  );
}
