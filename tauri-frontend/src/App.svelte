<script lang="ts">
	import { Router } from 'sv-router';
	import { isActive } from 'sv-router/generated';

    const routes = [
        { name: "Home", link: "/" },
        { name: "Login", link: "/login" },
    ]
</script>

<main>
    <section class="p-4 border-b flex gap-x-5">
    {#each routes as route}
        {#if isActive(route.link)}
            <a class="text-blue-700 underline" href={route.link}> {route.name} </a>
        {:else}
            <a href={route.link}> {route.name} </a>
        {/if}
    {/each}
    </section>

    <Router />
</main>
