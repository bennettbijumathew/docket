import { api } from "@/stores/planner/api.ts"

class PlannerState {
    example: string | null = $state("")

    async setExample() {
        const data = await api.getAllPlanners()

        this.example = data
    }
}

export const plannerState = new PlannerState()