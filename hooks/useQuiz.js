import React, { createContext, useContext, useMemo, useState } from "react";
import { Queue } from "@datastructures-js/queue";

const QuizContext = createContext();
export function MusicNoteProvider({ children }) {
  const [qMode, SetQMode] = useState("endless");
  const [qTreble, SetQTreble] = useState(true);
  const [qBass, SetQBass] = useState(true);
  const [qSharps, SetQSharps] = useState(false);
  const [qNaturals, SetQNaturals] = useState(true);
  const [qFlats, SetQFlats] = useState(false);

  const [aNo, SetANo] = useState(3);
  const [aClef, SetAClef] = useState(false);
  const [aPitch, SetAPitch] = useState(true);
  const [aOctave, SetAOctave] = useState(false);
  const [aAlphabet, SetAAlphabet] = useState(true);

  const [imgURI, SetImgURI] = useState(null);
  const queue = new Queue();

  function GenerateQueue() {
    if (qTreble) queue.enqueue("trebleNotes");
    if (qBass) queue.enqueue("bassNotes");
    if (qSharps) queue.enqueue("sharpNotes");
    if (qNaturals) queue.enqueue("naturalNotes");
    if (qFlats) queue.enqueue("flatNotes");
  }

  const quizMemo = useMemo(
    () => ({
      qMode,
      qTreble,
      qBass,
      qSharps,
      qNaturals,
      qFlats,
    }),
    [imgURI]
  );

  return (
    <QuizContext.Provider value={quizMemo}>{children}</QuizContext.Provider>
  );
}

export default function useMusicNote() {
  return useContext(QuizContext);
}
