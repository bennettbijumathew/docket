<script lang="ts">
    import ColorPicker from "@/components/ui/inputs/color-picker.svelte";
    import { type ColorKey } from "@/components/util/color";
    import { authentication } from "@/lib/auth/store.svelte";
    import { createPlanner } from "@/lib/planner/service";
    import { type NewPlannerData } from "@/lib/planner/type";
    import { Plus } from "@lucide/svelte";

    // This variable represents the input data used to create a new planner
    let newPlanner: NewPlannerData = $state({
        name: "",
        users: {},
        color: "red" as ColorKey
    })
   
    // This is a function for adding a new planner and resetting the inputs
    async function addNewPlanner(): Promise<void> {
        newPlanner.users = {
            [authentication.userId]: true
        }

        const isCreated = await createPlanner(newPlanner)
        
        if (isCreated == true) {
            newPlanner.name = ""
            newPlanner.users = {}
        }
    }
</script>
        
<!-- This area is the place to add planners -->
<form
    class="
        flex border-t border-background-300 p-4 gap-2
        flex-col
        sm:flex-row
    "
    onsubmit={(e) => { 
        e.preventDefault(); 
        addNewPlanner();
    }}
>   
    <div class="flex flex-row flex-1 gap-x-2">
        <input 
            type="text" 
            class="
                flex-1 px-1.5 rounded-lg bg-background-100 hover:bg-background-200 outline-background-400
                h-10 order-first
                sm:h-8 sm:order-last
            "
            placeholder="Enter a new planner.."
            aria-required="true"
            required
            bind:value={newPlanner.name}
        >

        <button 
            class="
                flex items-center justify-center bg-background-200 hover:bg-background-300 outline-background-400 rounded-lg 
                size-10 order-last
                sm:size-8 sm:order-first
            "
            aria-label="Add New Task" 
            type="submit"
        >
            <Plus class="size-4"/>
        </button>
    </div>

    <div class="
        flex gap-x-2
        overflow-x-scroll
        sm:overflow-visible
    ">
        <ColorPicker 
            value={newPlanner.color}
            onChangeFn={(newColor) => newPlanner.color = newColor as ColorKey}
            triggerClass="
                bg-background-100 hover:bg-background-200 outline-background-400 rounded-lg py-1 px-1 
                h-14 flex-auto text-sm
                sm:h-8 sm:text-md
            "
        />
    </div>
</form>
