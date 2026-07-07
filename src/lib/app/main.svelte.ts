import { User } from "firebase/auth";
import { listenForAuth } from "@/lib/auth/service";
import { startPlannerTasks, stopPlannerTasks } from "@/lib/planner-task/service";

class App {
    #unSubFromAuth?: () => void;
    loading: boolean = $state(true)

    // A function that starts the controllers that are used through the application.
    public start() {
        this.loading = false; 

        this.#unSubFromAuth = listenForAuth({
            // This sets up the listeners of the planners and tasks to sync with the store. 
            authenticatedFn: (user: User) => {
                startPlannerTasks({
                    userId: user.uid
                });
            },
            
            // Unsubscribes the listeners and removes data from store.
            unauthenticatedFn: () => {
                stopPlannerTasks();
            }
        })
    }

    // A function that resets the controllers of the application. 
    public stop() {
        stopPlannerTasks()
        this.#unSubFromAuth?.()
    }
}

export const app = new App(); 