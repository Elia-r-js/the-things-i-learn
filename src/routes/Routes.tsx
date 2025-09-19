

import MainPage from "../main-page";
import yup from "../mini project/yup.jscoockies/yup";
import Callender from "../mini project/callender/Callender";
import DragandDrop from "../mini project/dragand drop/dran-and-drop";



export const routes = {
    MainPage: {
        path: '/',
        Component:MainPage
    },
    yupjscoockies: {
        path : '/yupjscoockies',
        Component:yup
    },
    taghvim : {
        path : '/todayIs',
        Component:Callender
    },
    dnd : {
        path : '/dnd-kit',
        Component:DragandDrop
    }
}
