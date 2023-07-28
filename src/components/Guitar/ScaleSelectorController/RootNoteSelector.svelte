<script lang="ts">
	import { NOTES } from '$lib/consts';
	import { createEventDispatcher } from 'svelte';
	import Select, { Option } from '@smui/select';
	const dispatch = createEventDispatcher();

	export let root: string;
	const noteList: Note[] = NOTES;

	function onRootInput(e: CustomEvent) {
		dispatch('root-note-selected', e.detail.value as Note);
	}
</script>

<Select bind:value={root} label="Scale root" on:SMUISelect:change={onRootInput}>
	{#each noteList as noteListName}
		<Option value={noteListName}>
			{noteListName}
		</Option>
	{/each}
</Select>

