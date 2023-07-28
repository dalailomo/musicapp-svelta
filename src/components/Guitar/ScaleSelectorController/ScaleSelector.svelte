<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { SCALE } from '$lib/consts';

	export let scaleName: ScaleName;
	const scaleList: string[] = Object.keys(SCALE);

	const dispatch = createEventDispatcher();

    function onChangeScale(e: Event) {
		dispatch('scale-selected', (e.target as HTMLInputElement).value as ScaleName);
	}
</script>

<select bind:value={scaleName} on:change={onChangeScale}>
	{#each scaleList as scaleListName}
		<option value={scaleListName}>
			{scaleListName}
		</option>
	{/each}
</select>
