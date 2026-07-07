<script lang="ts">
    import { authentication } from "@/lib/auth/store.svelte";
    import { CircleUser } from "@lucide/svelte";
    import { p } from "sv-router/generated";
</script>

<div class="
    flex items-center justify-between gap-x-3 text-left bg-background-50 p-3 rounded-lg
    min-h-24 px-2 gap-2
    sm:min-h-22 sm:px-3 sm:gap-3
    lg:min-h-16
">
    <div class="flex items-center">
        <CircleUser class="size-7"/>
        
        <div class="pl-3">
            <!-- If there is no updates released or existing, a fully updated status is shown -->
            {#if authentication.status == "authenticated"}
                <h4 class="font-bold"> You are logged in.  </h4>
                <p> Current Account: {authentication.user?.email} </p>
            {:else}
                <h4 class="font-bold"> You are not logged in. </h4>
                <p> Current Account: N/A </p>
            {/if}
        </div>
    </div>
    
    <div class="flex items-center gap-x-2">
        <a 
            href={p("/login")}
            aria-label="Change user accounts"
            class="flex justify-between items-center gap-x-3 rounded-lg p-1.5 px-3 bg-background-200 hover:bg-background-300 hover:cursor-pointer"
        >
            Change Accounts
        </a>
        
        <a 
            href={p("/logout")}
            aria-label="Log out of your current website"
            class="flex justify-between items-center gap-x-3 rounded-lg p-1.5 px-3 bg-background-200 hover:bg-background-300 hover:cursor-pointer"
        >
            Log Out
        </a>
    </div>
</div>