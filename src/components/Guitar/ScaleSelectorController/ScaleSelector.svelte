<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { SCALE } from '$lib/consts';

	const scaleList: string[] = Object.keys(SCALE);
	let selected: string = Object.keys(SCALE)[1];

	const dispatch = createEventDispatcher();

    function onChangeScale(e: Event) {
		dispatch('scale-selected', SCALE[(e.target as HTMLInputElement).value] as ScalePatternStep[]);
	}
</script>

<select bind:value={selected} on:change={onChangeScale}>
	{#each scaleList as scaleName}
		<option value={scaleName}>
			{scaleName}
		</option>
	{/each}
</select>
