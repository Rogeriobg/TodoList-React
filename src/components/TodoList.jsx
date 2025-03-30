import styles from "./TodoList.module.css"
import { useState } from "react"

import React from 'react'

const TodoList = () => {
    const [task, setTask] = useState("")
    const [tasks, setTasks] = useState([])

    const addTask = () => {
        if (task.trim() === "") return;
        setTasks([...tasks, task]) // ...tasks trás as tarefas existente e task adiciona uma nova
        setTask("")        // limpa campo do formulário
    }


    console.log("tasks", tasks)

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.titke}>Lista de Tarefa</h2>
                <div className={styles.inputContainer}>
                    <input
                        type='text'
                        placeholder='Adicione uma tarefa'
                        className={styles.input}
                        value={task}
                        onChange={(e) => setTask(e.target.value)}
                    />
                    <button onClick={addTask} className={styles.button}>Adicionar</button>
                </div>

                <ul className={styles.taskList}>
                    {tasks.map((taskItem, index) => (
                        <li key={index} className={styles.taskItem}>{taskItem}</li>
                    ))}

                </ul>
            </div>
        </>
    )
}

export default TodoList