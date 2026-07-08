import { toast } from "svelte-sonner"
import { NewTaskData } from "./type"
import { deleteTask, MIN_PLANNERS, writeNewTask, appendPlannerToTask, detachPlannerFromTask, editName, editDate, editComplete } from "./repository"
import { CalendarDateTime } from "@internationalized/date"
import { FirestoreError } from "firebase/firestore"
import { FirebaseError } from "firebase/app"

// This creates a new task and updates the user interface on errors
export async function createTask(newTask: NewTaskData): Promise<boolean> {
    try {
        if (newTask.name.trim() == "") {
            throw new Error("To create a new task, the title requires a non-empty field")
        }
        else if (newTask.planners.size <= MIN_PLANNERS) {
            throw new Error(`To create a new task, the task requires more than ${MIN_PLANNERS} planners`)
        }
                
        await writeNewTask({
            name: newTask.name,
            planners: newTask.planners,
            dueDate: newTask.dueDate            
        });

        return true;
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with creating a new task")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }

        return false;
    }
}


// This removes a task while updating the interface on errors
type removeArgs = {
    id: string
}

export async function removeTask({id}: removeArgs): Promise<void> {
    try {
        if (id.trim() == "") {
            throw new Error("The task could not be deleted");
        }

        await deleteTask({
            id: id
        });
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with deleting the task")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }
    }
}


// This function adds a new planner to the task's list of associated planners. 
type addPlannerArgs = {
    taskId: string
    newPlannerId: string
}

export async function addPlannerToTask({taskId, newPlannerId}: addPlannerArgs): Promise<void> {
    // A guard clause to stop the function when there is no proper id.
    try {
        if (taskId.trim() == "" || newPlannerId.trim() == "") {
            throw new Error("The planner could not be added to the task")
        }

        await appendPlannerToTask({
            taskId: taskId, 
            newPlannerId: newPlannerId
        })
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with adding a planner to the task")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }
    }    
}


// This function remove a planner from the task's list of associated planners. 
type removePlannerArgs = {
    taskId: string
    oldPlannerId: string
}

export async function removePlannerFromTask({taskId, oldPlannerId}: removePlannerArgs) {
    try {
        if (taskId.trim() == "" || oldPlannerId.trim() == "") {
            throw new Error("The planner could not be removed from the task")
        }

        await detachPlannerFromTask({
            taskId: taskId, 
            oldPlannerId: oldPlannerId
        })
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with removing a planner from the task")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }
    }    
}


// This updates the name of a task
type updateNameArgs = {
    id: string, 
    name: string
}

export async function updateTaskName({id, name}: updateNameArgs): Promise<void> {
    try {
        // A guard clause to stop the function when there is no task id or new name.
        if (id.trim() == "") {
            throw new Error("The task's name could not be edited")
        }
        else if (name.trim() == "") {
            throw new Error("To edit the task, the title requires a non-empty field")
        }
        
        await editName({
            id: id, 
            name: name
        })
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with updating the name of a task")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }
    }    

} 

// This updates a task's date.
type updateDateArgs = {
    id: string, 
    date: CalendarDateTime
}

export async function updateTaskDate({id, date}: updateDateArgs): Promise<void> {
    try {
        // A guard clause to stop the function when there is no task id.
        if (id.trim() == "") {
            throw new Error("The task's date could not be edited")
        }

        await editDate({
            id: id, 
            date: date
        })
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with updating the date of a task")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }
    }    
} 

// This changes a task to be complete status
type updateCompleteArgs = {
    id: string, 
    complete: boolean
}

export async function updateTaskComplete({id, complete}: updateCompleteArgs): Promise<void> {
    try {
        // A guard clause to stop the function when there is no task id.
        if (id.trim() == "") {
            toast.error("The task's completed status could not be edited")
            return
        }
        
        await editComplete({
            id: id, 
            complete: complete
        })
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with updating the complete status of a task")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }
    }    

} 
