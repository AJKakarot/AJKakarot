"use client";

import { useEffect, useState } from "react";

export function useVenomMode() {
  const [venom, setVenom] = useState(false);

  useEffect(() => {
    const sync = () => setVenom(document.body.classList.contains("venom"));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return venom;
}
