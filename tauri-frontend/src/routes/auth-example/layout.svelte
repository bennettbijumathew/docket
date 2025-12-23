<script lang="ts">
	import type { Snippet } from 'svelte';
    import { authState } from "@/stores/auth/state.svelte.ts";

	let { children }: { children: Snippet } = $props();
</script>

<div class="p-4">
    {#if authState.loading === true && authState.ready === false}
        <p> loading </p>
    {:else if authState.loading === false && authState.ready === false}
        <p> you are not permitted </p>
    {:else}
        {@render children()}
    {/if}
</div>