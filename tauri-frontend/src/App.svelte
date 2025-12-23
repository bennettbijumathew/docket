<script lang="ts">
    import { signOut } from "firebase/auth";
    import { auth } from "./lib/config/firebase.ts";
	import { Router } from 'sv-router';
	import { isActive } from 'sv-router/generated';

    const routes = [
        { name: "Home", link: "/" },
        { name: "Login", link: "/login" },
    ]
</script>

<main>
    <section class="p-4 border-b flex justify-between">
        <div class="flex gap-x-5 items-center">
            {#each routes as route}
                {#if isActive(route.link)}
                    <a class="text-blue-700 underline" href={route.link}> {route.name} </a>
                {:else}
                    <a href={route.link}> {route.name} </a>
                {/if}
            {/each}
        </div>

        <button class="border p-1" onclick={() => signOut(auth)}>signout</button>
    </section>

    <Router />
</main>
