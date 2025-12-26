<script lang="ts">
    import { plannerState } from "@/stores/planner/state.svelte.ts"

    plannerState.setExample()
</script>

<main>
    <h1 class="font-bold text-lg"> auth example </h1>

    <p>{plannerState.example}</p>
</main>