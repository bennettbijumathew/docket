<!-- CODE -->
<script lang="ts">
    import ScrollSection from "@/components/ui/layout/containers/scroll-section.svelte";
    import AccordionItem from "@/components/ui/layout/containers/accordion-item.svelte";
    import UpdateTile from "@/components/ui/settings/update-tile.svelte";
    import { sidebar } from "@/components/ui/layout/sidebar/util.svelte";
    import SidebarRoot from "@/components/ui/layout/sidebar/root.svelte";
    import { getPlatform } from "@/lib/shared/platform";
    import { PanelLeft, } from "@lucide/svelte";
    import { Accordion } from "bits-ui";
    import { onMount, type Component } from "svelte";
    import AccountTile from "@/components/ui/settings/account-tile.svelte";
    import NotificationTile from "@/components/ui/settings/notification-tile.svelte";

    /** A list of options within the settings, references a name and component */
    interface Options {
        title: string, 
        tile: Component
    }

    let options: Options[] = [
        { title: "Account", tile: AccountTile }
    ]

    if (getPlatform() == "windows") {
        options.push({ title: "Update", tile: UpdateTile } )
    }

    if (getPlatform() == "android") {
        options.push({ title: "Notifications", tile: NotificationTile } )
    }

    /**     
        Opened accordions are handled by identification of strings, so on loading, 
        the titles are placed as the accordion's values.
    */
    let values: string[] = $state([])
    
    onMount(() => {
        values = options.map((item) => item.title)
    })
</script>

<!-- This is the sidebar of the application, includes routes -->
<SidebarRoot/>

<!-- This is the main section of the page -->
<section class="
    flex flex-1 flex-col min-h-0 min-w-0 pt-safe
    lg:flex-3
">
    <!-- Header of the application with a sidebar toggle -->
    <header 
        class="
            {getPlatform() == "windows" ? "pt-titlebar" : ""}
            flex justify-between border-b border-background-300 p-4 shrink-0 
            flex-col gap-2
            lg:flex-row sm:gap-2
        "
    >
        <!-- The title and sidebar toggle -->
        <div class="flex items-center gap-x-2">
            <button 
                onclick={() => sidebar.toggle()}
                aria-label="Toggle the sidebar"
                class="flex items-center justify-center bg-background-100 hover:bg-background-200 rounded-lg cursor-pointer size-8"
            >      
                <PanelLeft class="size-4"/>
            </button>

            <h1 class="font-title font-semibold text-lg"> Settings </h1>
        </div>
    </header>
        
    <!-- The area that holds the settings list options. -->
    <ScrollSection
        class="flex-1 min-h-0 h-full"
        viewportClasses="h-full p-4"
    >
        <Accordion.Root
            type="multiple"
            bind:value={values}
        >
            {#each options as option}
                {@const OptionTile = option.tile}

                <AccordionItem 
                    title={option.title}
                    triggerClasses="
                        bg-background-100 hover:bg-background-200 rounded-md mb-1 
                        w-full py-1.5
                        lg:w-auto lg:py-0.5
                    "
                    contentClasses="flex flex-col gap-4 mb-5"
                >        
                    <OptionTile/>
                </AccordionItem>
            {/each}
        </Accordion.Root>
    </ScrollSection>
</section>
