<script lang="ts">
    import { type RouteDetails, type RouteNames, routes } from "@/components/util/routes";
    import { X, Maximize2, Minimize2, Minus, ArrowLeft, ArrowRight } from '@lucide/svelte';
    import { getCurrentWindow } from '@tauri-apps/api/window';
    import { getPlatform } from "@/lib/shared/platform";
    import { navigate } from "sv-router/generated";
    import { onDestroy, onMount } from "svelte";
    import { app } from "@/lib/app/main.svelte";
	import { Router } from "sv-router";
	import "sv-router/generated";
    
    // This tracks the state of the application's window maximized state.
    let maximizedState: boolean = $state(false) 
    
    function isWindowMaximized() {
        getCurrentWindow().isMaximized().then((item => {
            maximizedState = item
        }));
    }


    /** Routes that are displayed on the sidebar. */
    const sidebarRoutes: Map<RouteNames, RouteDetails>  = new Map();

    sidebarRoutes.set("Planner", routes.get("Planner")!)
    sidebarRoutes.set("Task", routes.get("Task")!)
    sidebarRoutes.set("Settings", routes.get("Settings")!)
</script>

{#if getPlatform() === "windows"}
    <header 
        data-tauri-drag-region 
        class="
            bg-transparent fixed top-0 left-0 right-0 w-full h-titlebar flex items-center justify-between z-100 
        "
    >
        <div class="
            flex items-center transition-colors 
            *:h-titlebar *:p-2 *:cursor-pointer *:hover:bg-background-100/60
        ">
            <button onclick={() => navigate(-1)}>
                <ArrowLeft class="size-4"/>
            </button>

            <button onclick={() => navigate(+1)}>
                <ArrowRight class="size-4"/>
            </button>
        </div>

        <div class="
            gap-x-2 ml-4
            hidden
            sm:flex
            *:h-titlebar *:py-1.5 *:px-2 *:cursor-pointer *:hover:bg-background-100/60 *:text-xs
        ">
            {#each sidebarRoutes as [name, {link}]}
                <a 
                    href={link}
                >
                    {name}
                </a>
            {/each}
        </div>

        <div class="
            flex items-center transition-colors 
            *:h-titlebar *:p-2 *:cursor-pointer *:hover:bg-background-100/60
        ">
            <button 
                onclick={getCurrentWindow().minimize}
            >
                <Minus class="size-4 text-content-900 hover:text-content-600"/>  
            </button>

            <button 
                onclick={() => { 
                    getCurrentWindow().toggleMaximize(); 
                    isWindowMaximized();
                }}
            > 
                {#if maximizedState == true}
                    <Minimize2 class="size-4 text-content-900"/>    
                {:else}
                    <Maximize2 class="size-4 text-content-900"/>    
                {/if}
            </button>
            
            <button 
                onclick={getCurrentWindow().close}
                class="cursor-pointer px-2 h-6 text-content-900 hover:text-red-500"
            > 
                <X class="size-4 "/>    
            </button>
        </div>
    </header>
{/if}

<Router/>