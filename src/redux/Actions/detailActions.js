import { PLANET_DETAILS } from "./actionTypes";

export const planetDetails =(product)=>{
    return {
        type: PLANET_DETAILS,
        payload: product,
    }
}
