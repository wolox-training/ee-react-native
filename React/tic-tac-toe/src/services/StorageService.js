export const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem('credentials');
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state) => {
  const serializedState = JSON.stringify(state);
  sessionStorage.setItem('credentials', serializedState);
};
