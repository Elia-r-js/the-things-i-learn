import MainPage from "../main-page";
import yup from "../mini project/yup.jscoockies/yup";
import Callender from "../mini project/callender/Callender";
import DragandDrop from "../mini project/dragand drop/dran-and-drop";
import Bears from "../mini project/zoostand/Bears";
import Todolist from "../mini project/zoostand/Todolist";
import TodoList from "../mini project/todolist/todo-list";
import TODOlist2 from "../mini project/TOdolist2/TODOlist";

export const routes = {
  MainPage: {
    path: "/",
    Component: MainPage,
  },
  yupjscoockies: {
    path: "/yupjscoockies",
    Component: yup,
  },
  taghvim: {
    path: "/todayIs",
    Component: Callender,
  },
  dnd: {
    path: "/dnd-kit",
    Component: DragandDrop,
  },

  zustand: {
    path: "/zudtand",
    Component: Bears,
  },
  zustand2: {
    path: "/zustand2",
    Component: Todolist,
  },
  todolist : {
    path: "/todolist",
    Component : TodoList
  },
    todolist2 : {
    path: "/todolist2",
    Component : TODOlist2
  }
};
