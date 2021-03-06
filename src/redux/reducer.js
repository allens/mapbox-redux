import { MapActionTypes } from '@mapbox/mapbox-gl-redux'

const initialState = {
  bearing: 0
}

const reducer = (state = initialState, action) => {
  const map = action.map
  switch (action.type) {
    case MapActionTypes.zoomend:
      return Object.assign({}, state, {
        zoom: map.getZoom()
      })
    case MapActionTypes.sync:
      return Object.assign({}, state, {
        bearing: map.getBearing()
      })
    case MapActionTypes.rotate:
      return Object.assign({}, state, {
        bearing: map.getBearing()
      })
    default:
      return state
  }
}

export default reducer
