<script lang="ts">
	import { createFretboardMatrix } from '$lib/guitar';
	import { SCALE, NOTES } from '$lib/consts';
	import ScaleSelectorController from './Guitar/ScaleSelectorController.svelte';
	import ScaleModeSelector from './Guitar/ScaleModeSelector.svelte';
	import Fretboard from './Guitar/Fretboard.svelte';
	import TuningSelector from './Guitar/TuningSelector.svelte';

	let root = NOTES[4];
	let scaleName: ScaleName = 'major';
	let steps = 22;
	let tunningNotes: Note[] = ["E", "A", "D", "G", "B", "E"];

	$: tunning = tunningNotes.map((note: Note) => NOTES.indexOf(note));
	$: scale = SCALE[scaleName];
	$: items = createFretboardMatrix(root, scale, steps,tunning).reverse();

	function onScaleChange(event: CustomEvent) {
		scaleName = event.detail.scaleName;
		root = event.detail.root;
	}

	function onScaleModeChange(event: CustomEvent) {
		scale = [...event.detail];
	}

	function onTuneChange(event: CustomEvent) {
		tunningNotes = [...event.detail]
	}

	function onFretboardLengthChange(event: CustomEvent) {
		steps = event.detail;
	}
</script>

<div>
	<ScaleSelectorController {root} {scaleName} on:input={onScaleChange} />
	<ScaleModeSelector {scale} on:mode-selected={onScaleModeChange} />
	<TuningSelector {tunningNotes} on:on-tune-change={onTuneChange} />
	<br />
	<Fretboard {steps} {items} on:input={onFretboardLengthChange} />
</div>
