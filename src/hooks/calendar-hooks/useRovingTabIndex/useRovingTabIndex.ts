export const useRovingTabIndex = (activeId: string) => {
  return (id: string) => ({
    tabIndex: id === activeId ? 0 : -1,
  });
};
