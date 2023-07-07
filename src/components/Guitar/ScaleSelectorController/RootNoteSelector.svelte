<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	export let root: string;

	function onRootInput(e: Event) {
		dispatch('root-note-selected', (e.target as HTMLInputElement).value as Note);
	}
</script>

<input type="text" on:input={onRootInput} bind:value={root} />
