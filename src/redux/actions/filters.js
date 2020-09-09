export const setTextFilter = (name) => ({
  type: 'SET_TEXT_FILTER',
  name
})

export const setCheckboxFilter = (brand , camera) => ({
  type: 'SET_CHECKBOX_FILTER',
  brand,
  camera
})

export const removeCheckboxFilter = (brand ) => ({
  type: 'REMOVE_CHECKBOX_FILTER',
  brand
})

export const clearFilters = () => ({
  type: 'CLEAR_FILTERS'
})