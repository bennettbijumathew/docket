<script lang="ts">
    import { sidebar, SIDEBAR_KEY } from "@/components/ui/layout/sidebar/util.svelte";
    import { app } from "@/lib/app/main.svelte";
    import { authentication } from "@/lib/auth/store.svelte";
    import { planners } from "@/lib/planner/store.svelte";
    import { tasks } from "@/lib/task/store.svelte";
    import { ArrowRight } from "@lucide/svelte";
    import { navigate, p } from "sv-router/generated";

    $effect(() => {
        if (authentication.status === "authenticated" && app.loading === false && tasks.isLoaded == true && planners.isLoaded == true) {
            navigate("/task", { 
                search: {
                    [SIDEBAR_KEY]: sidebar.isOpen
                }
            })
        }
    })
</script>

<main class="flex flex-col justify-center items-center flex-1 bg-linear-to-r from-purple-100 to-blue-200 px-6 gap-y-6">
    <div class="text-center">
        <h2 class="text-2xl font-title font-bold"> Welcome to Docket! </h2>
        <p> This is a task management application </p>
    </div>

    {#if authentication.status === "authenticated"}
        <a
            href={p("/task", { 
                search: {
                    [SIDEBAR_KEY]: sidebar.isOpen
                }
            })} 
            aria-label="This is a link to go to the task page"
            class="min-w-26 flex justify-between items-center gap-x-2 p-2 px-4 bg-background-50 hover:bg-background-100 shadow-md rounded-lg cursor-pointer"
        >
            Log In
            <ArrowRight class="size-4"/>
        </a>
    {:else}
        <a
            href={p("/login")} 
            aria-label="This is a link to go to the log in page"
            class="min-w-26 flex justify-between items-center gap-x-2 p-2 px-4 bg-background-50 hover:bg-background-100 shadow-md rounded-lg cursor-pointer"
        >
            Log In
            <ArrowRight class="size-4"/>
        </a>
    {/if}
</main>