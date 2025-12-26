import { fetcher } from "@/lib/util/fetcher"; 

class PlannerAPI { 
    async getAllPlanners() { 
        const { data, error } = await fetcher<string>("example") 
        
        if (error == null) { 
            console.error(error) 
        } 
        
        return data 
    } 
} 

export const api = new PlannerAPI()