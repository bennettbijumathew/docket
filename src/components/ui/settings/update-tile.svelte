<!-- CODE -->
<script lang="ts">
    import { Check, DownloadIcon, Hourglass, type Icon, LoaderCircle, RefreshCcw } from "@lucide/svelte";
    import { check, Update } from '@tauri-apps/plugin-updater';
    import { relaunch } from '@tauri-apps/plugin-process';
    import { getPlatform } from "@/lib/shared/platform";

    // This represents the upcoming update of the application.
    let loading: boolean = $state(true)
    let update: Update | null = $state(null);
    type UpdateStatus = "Idle" | "Started" | "Progress" | "Finished" ;
    let updateStatus: UpdateStatus = $state("Idle");

    // This changes the update variable to the latest update.
    async function checkForUpdates(): Promise<void> {
        loading = true;

        if (getPlatform() == "windows") {
            update = await check();
        }
        else {
            update = null;
        }

        loading = false;
    }

    // This downloads and installs the updates.
    async function installUpdate(): Promise<void> {
        if (update == null) {
            return; 
        }

        // Status is updated as the download and install progress.
        await update.downloadAndInstall((event) => {
            switch (event.event) {
                case 'Started':
                    updateStatus = "Started";
                    break;
                case 'Progress':
                    updateStatus = "Progress";
                    break;
                case 'Finished':
                    updateStatus = "Finished";
                    break;
                }
        });

        // This relaunches the application on installation of the app.
        await relaunch();
    }

    // On running the page, this is called to see if there are updates
    checkForUpdates();
</script>

<!-- COMPONENTS -->
{#snippet statusSymbol(name: string, color: string, icon: typeof Icon)}
    {@const StatusIcon = icon}

    <div class="flex items-center justify-center rounded-lg {color} size-5">
        <StatusIcon class="size-3"/>
    </div>
    
    {name}
{/snippet}

{#if getPlatform() == "windows"}
    <div class="accordion-item-box accordion-setting">
        <div class="
            flex items-center
            flex-1
            sm:flex-2
        ">
            <RefreshCcw class="size-7"/>
            
            <div class="pl-3">
                <!-- If there is no updates released or existing, a fully updated status is shown -->
                {#if update == null}
                    <h4 class="font-bold"> You're up to date. </h4>
                {:else}
                    <h4 class="font-bold"> You're not up to date. </h4>
                {/if}

                <a 
                    class="flex items-center text-sm hover:cursor-pointer hover:underline"
                    href="https://github.com/bennettbijumathew/docket-todo/releases/latest/"
                    target="_blank"
                > 
                    <!-- If there is no updates released or existing, a fully updated status is shown -->
                    {#if update == null}
                        View Current Release Notes
                    {:else}
                        View Newest Release Notes 
                    {/if}
                </a>
            </div>
        </div>
        
        {#if update !== null}
            <button 
                class="flex justify-between items-center gap-x-3 rounded-lg p-1.5 px-3 bg-background-200 hover:bg-background-300 hover:cursor-pointer"
                onclick={installUpdate}
            >
                <!-- Shows different icons for different moments of the install and download -->
                {#if updateStatus == "Idle"}
                    {@render statusSymbol("Install Update", "bg-amber-300", DownloadIcon)}
                {:else if updateStatus == "Started"}
                    {@render statusSymbol("Downloading Update", "bg-yellow-500", Hourglass)}
                {:else if updateStatus == "Progress"}
                    {@render statusSymbol("Installing Update", "bg-yellow-500", Hourglass)}
                {:else if updateStatus == "Finished"}
                    {@render statusSymbol("Finished Update", "bg-green-500", Check)}
                {/if}
            </button>
        {:else}
            <button 
                class="flex justify-between items-center gap-x-3 rounded-lg p-1.5 px-3 bg-background-200 hover:bg-background-300 hover:cursor-pointer"
                onclick={checkForUpdates}
            >
                {#if loading == true}
                    {@render statusSymbol("Checking for updates", "bg-background-400 animate-spin", LoaderCircle)}
                {:else}
                    Check for updates
                {/if}
            </button>
        {/if}
    </div>
{/if}