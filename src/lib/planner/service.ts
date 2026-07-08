// Purpose:
// The planner service functions are used by the user interface. These functions usually interact 
// with the repository function while handling validation, toasts and errors.

import { ColorKey } from "@/components/util/color";
import { deletePlanner, MAX_STORED_PLANNERS, updatePlannerColor, updatePlannerName, updatePlannerVisibility, writeNewPlanner } from "@/lib/planner/repository";
import { toast } from "svelte-sonner";
import { authentication } from "@/lib/auth/store.svelte";
import { NewPlannerData } from "@/lib/planner/type";
import { planners } from "@/lib/planner/store.svelte";
import { FirestoreError } from "firebase/firestore";
import { FirebaseError } from "firebase/app";

// This function deletes the planner by using the repository.
export async function createPlanner(newPlanner: NewPlannerData): Promise<boolean> {
    try {
        if (planners.all.length + 1 > MAX_STORED_PLANNERS) {
            throw new Error(`You can't create more planner as you have exceeded the limit of ${MAX_STORED_PLANNERS} planners`)
        }
        else if (newPlanner.name.trim() == "") {
            throw new Error("To create a new planner, the title requires a non-empty field")
        }
        
        await writeNewPlanner({
            name: newPlanner.name,
            users: newPlanner.users,
            color: newPlanner.color
        });

        return true;
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with creating a new planner")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }

        return false;
    }
}


// This function deletes the planner by using the repository.
type deleteArgs = {
    id: string
}

export async function removePlanner({id}: deleteArgs): Promise<void> {
    try {
        if (planners.all.length - 1 <= 0) {
            throw new Error("Could not delete the planner as there is not enough planners");
        }
        else if (id.trim() === "") {
            throw new Error("Could not delete the planner");
        }
        
        await deletePlanner({
            id: id
        });
        
        toast.success("Planner has been deleted");
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with deleting the planner")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }
    }
}


// This functions edit the planner name.
type editNameArgs = {
    id: string
    name: string
}

export async function editPlannerName({id, name}: editNameArgs): Promise<void> {
    try {
        if (id.trim() === "") {
            throw new Error("Can't edit the planner name");
        }
        else if (name.trim() === "") {
            throw new Error("You need to add an non-empty value for planner name");
        }
        
        await updatePlannerName({
            id: id,
            name: name
        });
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with editing the planner's name")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }
    }
}


// This functions edit the planner color
type editColorArgs = {
    id: string
    color: ColorKey
}

export async function editPlannerColor({id, color}: editColorArgs): Promise<void> {
    try {
        if (id.trim() === "") {
            throw new Error("Can't edit the planner name");
        }

        await updatePlannerColor({
            id: id,
            color: color
        });
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with editing the planner's color")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }
    }
}


// This function edits the user's visibility status of the planner. 
type editVisibleArgs = {
    id: string
    visibility: boolean
}

export async function editPlannerVisibility({id, visibility}: editVisibleArgs): Promise<void> {
    try {
        if (id.trim() === "") {
            throw new Error("Can't edit the visibility of the planner");
        }

        await updatePlannerVisibility({
            id: id, 
            userId: authentication.userId, 
            visibility: visibility
        })
    }
    catch (error) {
        if (error instanceof FirestoreError || error instanceof FirebaseError ) {
            toast.error("Faced an error with editing the planner's visibility state")
        }
        else if (error instanceof Error) {
            toast.error(error.message)
        }
    }
}