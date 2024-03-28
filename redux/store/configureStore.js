import { configureStore } from '@reduxjs/toolkit'
import itemListReducer from '../reducers/itemList/itemListSlice'
import descriptionCardReducer from '../reducers/descriptionCard/descriptionCardSlice'

export default configureStore({
  reducer: {
    itemList: itemListReducer,
    descriptionCard: descriptionCardReducer
  }
})