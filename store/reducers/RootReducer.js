import { combineReducers } from "redux";
import assetReducer from "./AssetReducer";
import warehouseReducer from "./WarehouseReducer";
import userReducer from './UserReducer';
import shipmentReducer from './ShipmentReducer';

const rootReducer = combineReducers({
    assetReducer,
    warehouseReducer,
    userReducer,
    shipmentReducer,
})
export default rootReducer; 