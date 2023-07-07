<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import RootNoteSelector from './ScaleSelectorController/RootNoteSelector.svelte';
	import ScaleSelector from './ScaleSelectorController/ScaleSelector.svelte';
	import ModeSelector from './ScaleSelectorController/ModeSelector.svelte';

	export let scale: ScalePatternStep[];
	export let root: Note;

	const dispatch = createEventDispatcher();

	function buildOutput(param: { scale: ScalePatternStep[], root: Note }) {
		return { scale: param.scale, root: param.root };
	}

	function onRootNoteSelected(event: CustomEvent<Note>) {
		dispatch('input', buildOutput({ scale, root: event.detail }));
	}

	function onScaleSelected(event: CustomEvent<ScalePatternStep>) {
		dispatch('input', buildOutput({ scale: event.detail, root }));
	}
</script>

<RootNoteSelector {root} on:root-note-selected={onRootNoteSelected} />
<ScaleSelector on:scale-selected={onScaleSelected} />
<ModeSelector {scale} on:mode-selected={onScaleSelected} />
