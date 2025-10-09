import { useState } from "react";

export const useTooltip = () => {
  const [visible, setVisible] = useState(false);

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return { visible, show, hide };
};