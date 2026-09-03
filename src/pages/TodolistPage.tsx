import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TaskInput from "../components/TaskInput"
import type { TaskCardProps } from "../libs/Todolist";
import Footer from "../components/Footer";
import TaskCard from "../components/TaskCard";
const title = "Todo List";
const tasks: TaskCardProps[] = [
  {
    id: "1",
    title: "Read a book",
    description: "Vite + React + Bootstrap + TS",
    isDone: false,
  },
  {
    id: "2",
    title: "Write code",
    description: "Finish project for class",
    isDone: false,
  },
  {
    id: "3",
    title: "Deploy app",
    description: "Push project to GitHub Pages",
    isDone: true,
  },
];

export default function TodolistPage() {
  return (
    <div className="container-fluid min-vh-100">
      <div className="row h-100">
        <div className="col-2 p-0">
          <Sidebar userName="Pann" type="admin" />
        </div>

        <div className="col-10 p-0 d-flex flex-column min-vh-100">

          <Header></Header>

          <main className="flex-grow-1 p-4">
            <div className="container">

              <h2 className="text-center">{title}</h2>
              <p className="text-center text-muted">ทั้งหมด {tasks.length} งาน</p>
              <TaskInput></TaskInput>
              
              {
              tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  description={task.description}
                  isDone={task.isDone}
              />
            ))}
            </div>
          </main>
          <Footer year="2026" fullName="Pann Kitina" studentId={680610692}></Footer>
        </div>
      </div>
    </div>
  );
}
