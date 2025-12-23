<script lang="ts">
	import type { Snippet } from 'svelte';
    import { authState } from "@/stores/auth/state.svelte.ts";

	let { children }: { children: Snippet } = $props();
</script>

{#if authState.loading === true && authState.ready === false}
    <div class="p-8">
        <p> loading </p>
    </div>
{:else}
    <div class="p-8 bg-red-100">
        {@render children()}


        <section class="border">
            <p> Loading: {authState.loading.toString()} </p>
            <p> User: {authState.user?.toString()} </p>
            <p> Ready: {authState.ready.toString()} </p>
        </section>
    </div>
{/if}
