<script lang="ts">
    import { ArrowRight, LoaderCircle } from "@lucide/svelte";
    import { sidebar, SIDEBAR_KEY } from "../sidebar/util.svelte";
    import { app } from "@/lib/app/main.svelte";
    import { authentication } from "@/lib/auth/store.svelte";
    import { p, route } from "sv-router/generated";
</script>

<main class="flex flex-1 items-center justify-center">
    <LoaderCircle class="animate-spin"/>

    <a
        href={p("/task", { 
            search: {
                [SIDEBAR_KEY]: sidebar.isOpen
            }
        })} 
        aria-label="This is a link to go to the task page"
        class="min-w-26 flex justify-between items-center gap-x-2 p-2 px-4 bg-background-50 hover:bg-background-100 shadow-md rounded-lg cursor-pointer"
    >
        Head In
        <ArrowRight class="size-4"/>
    </a>

    <div class="flex flex-col gap-2"> 
        <p> loading: {app.loading} </p>
        <p> auth: {authentication.status} </p>
        <p> route: {route.pathname} </p>
    </div>
</main>
