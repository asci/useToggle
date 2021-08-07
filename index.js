import React from "react";

export function useToggle(defaultValue) {
  const [isActive, setIsActive] = React.useState(defaultValue);
  return React.useMemo(() => {
    const toggle = () => setIsActive((s) => !s);
    const toggleTo = (s) => setIsActive(s);
    return {
      isActive,
      toggle,
      toggleTo,
    };
  }, [isActive]);
}
