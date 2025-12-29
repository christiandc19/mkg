import { useEffect, useRef, useState } from "react";

export default function Typewriter({
  text,
  speed = 80,
  cursor = true,
  stopCursorOnDone = false,
}) {
  const [index, setIndex] = useState(0);
  const [cursorOn, setCursorOn] = useState(true);
  const timerRef = useRef(null);
  const blinkRef = useRef(null);

  // typing
  useEffect(() => {
    // reset when text changes
    setIndex(0);

    // clear any previous timer (StrictMode safe)
    if (timerRef.current) clearTimeout(timerRef.current);

    const tick = () => {
      setIndex((i) => {
        const next = Math.min(i + 1, text.length);
        return next;
      });
      timerRef.current = showDone() ? null : setTimeout(tick, speed);
    };

    // start after a tiny delay
    timerRef.current = setTimeout(tick, speed);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };

    function showDone() {
      // after state updates, we can check completion on next render;
      // handled below in the "done" effect.
      return false;
    }
  }, [text, speed]);

  const done = index >= text.length;

  // cursor blink
  useEffect(() => {
    if (!cursor) return;

    if (blinkRef.current) clearInterval(blinkRef.current);
    blinkRef.current = setInterval(() => setCursorOn((v) => !v), 500);

    return () => {
      if (blinkRef.current) clearInterval(blinkRef.current);
    };
  }, [cursor]);

  // optionally stop cursor after done
  useEffect(() => {
    if (!cursor) return;
    if (!stopCursorOnDone) return;
    if (!done) return;

    const t = setTimeout(() => setCursorOn(false), 700);
    return () => clearTimeout(t);
  }, [done, cursor, stopCursorOnDone]);

  return (
    <span>
      {text.slice(0, index)}
      {cursor && cursorOn && <span className="ml-1 inline-block">|</span>}
    </span>
  );
}
