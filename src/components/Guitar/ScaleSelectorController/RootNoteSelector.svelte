<script lang="ts">
	import { NOTES } from '$lib/consts';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let root: string;
	const noteList: Note[] = NOTES;

	function onRootInput(e: Event) {
		dispatch('root-note-selected', (e.target as HTMLInputElement).value as Note);
	}
</script>

Scale root note:
<select bind:value={root} on:change={onRootInput}>
	{#each noteList as noteListName}
		<option value={noteListName}>
			{noteListName}
		</option>
	{/each}
</select>

