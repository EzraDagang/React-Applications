import React, { startTransition, useState } from 'react';
import downArrow from "./downArrow.png";
import upArrow from "./upArrow.png";
import styles from "./ToDoList.module.css";

function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const HandleAddNewTask = () => {
        if (!newTask.trim())
            return;

        setTasks(prevTasks => [...prevTasks, newTask]);
        setNewTask("");
 
        // setTimeout(() => {
        //     if (!newTask.trim())
        //         return;

        //     console.log(`Outside of setTasks ${tasks.length}`);

        //     setTasks(prevTasks => {
        //         console.log(`Inside of setTasks ${prevTasks.length}`);
        //         return [...prevTasks, newTask];
        //     });
        //     setNewTask("");
        // }, 3000);
    }

    const HandleRemoveTask = (index) => {
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== index));
    }

    const HandleIncrementTask = (index) => {

        setTasks(prevTasks => {
            if (index === 0) {
                return prevTasks;
            }

            const newTasks = [...prevTasks];
            // const taskBefore = newTasks[index - 1];
            // newTasks[index - 1] = newTasks[index];
            // newTasks[index] = taskBefore;

            [newTasks[index - 1], newTasks[index]] = [newTasks[index], newTasks[index - 1]];

            return newTasks;
        })
    }

    const HandleDecrementTask = (index) => {

        setTasks(prevTasks => {
            if (index === (tasks.length - 1)) {
                return prevTasks;
            }

            const newTasks = [...prevTasks];
            // const taskAfter = newTasks[index + 1];
            // newTasks[index + 1] = newTasks[index];
            // newTasks[index] = taskAfter;

            [newTasks[index + 1], newTasks[index]] = [newTasks[index], newTasks[index + 1]];

            return newTasks;
        })
    }

    return (
        <div className={styles.toDoListContainer}>
            <h1 className={styles.title}>To-Do-List</h1>

            <div className={styles.inputContainer}>
                <input className={styles.inputBox} type="text" placeholder='Enter a task...' value={newTask} onChange={(e) => setNewTask(e.target.value)} />
                <button className={styles.inputButton} onClick={HandleAddNewTask}>Add</button>
            </div>

            <ul className={styles.unorderedList}>
                {tasks.map((task, index) =>
                    <li key={index}>
                        <div className={styles.listContainer}>
                            <div className={styles.listText}>{task}</div>
                            <div className={styles.buttonContainer}>
                                <button className={styles.deleteButton} onClick={() => HandleRemoveTask(index)}>Delete</button>

                                <button className={styles.arrowButton} onClick={() => HandleIncrementTask(index)}>
                                    <img className={styles.arrowIcon} src={upArrow} alt="increase" />
                                </button>

                                <button className={styles.arrowButton} onClick={() => HandleDecrementTask(index)}>
                                    <img className={styles.arrowIcon} src={downArrow} alt="decrease" />
                                </button>

                                {/* {index !== 0 ?
                                    (<button className={styles.arrowButton} onClick={() => HandleIncrementTask(index)}>
                                        <img className={styles.arrowIcon} src={upArrow} alt="increase" />
                                    </button>) :
                                    <div className={styles.arrowPlaceHolder}></div>}

                                {index !== (tasks.length - 1) ?
                                    (<button className={styles.arrowButton} onClick={() => HandleDecrementTask(index)}>
                                        <img className={styles.arrowIcon} src={downArrow} alt="decrease" />
                                    </button>) :
                                    <div className={styles.arrowPlaceHolder}></div>
                                } */}
                            </div>
                        </div>
                    </li>)}
            </ul>
        </div>
    )
}

export default ToDoList;