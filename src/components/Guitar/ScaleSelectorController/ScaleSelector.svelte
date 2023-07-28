<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { SCALE } from '$lib/consts';
	import Select, { Option } from '@smui/select';

	export let scaleName: ScaleName;
	const scaleList: string[] = Object.keys(SCALE);

	const dispatch = createEventDispatcher();

    function onChangeScale(e: CustomEvent) {
		dispatch('scale-selected', e.detail.value as ScaleName);
	}
</script>

<Select bind:value={scaleName} label="Scale" on:SMUISelect:change={onChangeScale}>
	{#each scaleList as scaleListName}
		<Option value={scaleListName}>
			{scaleListName}
		</Option>
	{/each}
</Select>
