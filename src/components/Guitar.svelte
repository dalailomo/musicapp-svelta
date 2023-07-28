<script lang="ts">
	import { createFretboardMatrix } from '$lib/guitar';
	import { SCALE, NOTES } from '$lib/consts';
	import ScaleSelectorController from './Guitar/ScaleSelectorController.svelte';
	import Fretboard from './Guitar/Fretboard.svelte';

	let root = NOTES[0];
	let scaleName: ScaleName = 'blues';
	let scale = SCALE[scaleName];
	let steps = 22;

	function onScaleChange(event: CustomEvent) {
		scale = [...event.detail.scale];
		root = event.detail.root;
	}

	function onFretboardLengthChange(event: CustomEvent) {
		steps = event.detail;
	}

	$: items = createFretboardMatrix(root, scale, steps, [4, 9, 2, 7, 11, 4]).reverse();
</script>

<div>
	<ScaleSelectorController {root} {scale} {scaleName} on:input={onScaleChange} />
	<br />
	<Fretboard {steps} {items} on:input={onFretboardLengthChange} />
</div>
