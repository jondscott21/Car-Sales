export const addFeature = (feature) => {
    return { type: 'ADD_FEATURES', payload: feature };
  };

export const removeItem = (feature) => {
    return { type: 'REMOVE_FEATURES', payload: feature };
}