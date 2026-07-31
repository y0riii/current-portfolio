"use client";

import Lottie, { type EventListener } from "react-lottie";
import animationData from "@/data/confetti.json";

/**
 * react-lottie's own defaultProps, passed explicitly.
 *
 * The component reads all of these unguarded: componentDidMount calls
 * `eventListeners.forEach(...)`, and componentDidUpdate reads isStopped,
 * isPaused and speed. If defaultProps don't get applied for any reason it
 * throws "Cannot read properties of undefined (reading 'forEach')" the moment
 * it mounts. Supplying them here removes that dependency entirely — the values
 * are identical to the library's, so behaviour is unchanged.
 */
const lottieDefaults: {
  eventListeners: EventListener[];
  isStopped: boolean;
  isPaused: boolean;
  speed: number;
} = {
  eventListeners: [],
  isStopped: false,
  isPaused: false,
  speed: 1,
};

/**
 * Confetti burst shown when the email address is copied.
 *
 * Lives in its own module because react-lottie pulls in lottie-web, which
 * touches `document` at import time and crashes the server prerender. BentoGrid
 * loads this via next/dynamic({ ssr: false }) so the module is only ever
 * evaluated in the browser, which also keeps lottie-web and the animation JSON
 * out of the main bundle.
 */
export default function ConfettiAnimation({ play }: { play: boolean }) {
  return (
    <Lottie
      {...lottieDefaults}
      options={{
        loop: play,
        autoplay: play,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      }}
    />
  );
}
