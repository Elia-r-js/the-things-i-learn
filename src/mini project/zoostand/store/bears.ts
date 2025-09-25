import { create } from "zustand";

    interface Bearstore {
        Bears :number,
        increasePopulation:()=>void ,
        reset:()=> void,
        updateBears:(newBears :number) => void

    }

const useBear = create<Bearstore>((set) =>({
    Bears:0,
    increasePopulation:() =>set((state)=>({Bears:state.Bears + 1})),
    reset:() => set({Bears : 0}),
    updateBears:(newBears) => set({Bears : newBears})
}))
export default useBear;