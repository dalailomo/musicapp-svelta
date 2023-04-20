<script lang="ts">
    import {createFretboardMatrix} from "$lib/guitar";
    import {SCALE, NOTE_TAG} from "$lib/consts";
    import ScaleSelector from "./Guitar/ScaleSelector.svelte";
    import Fretboard from "./Guitar/Fretboard.svelte";

    let root = NOTE_TAG[0];
    let scale = SCALE['major'];
    let steps = 22;

    function onScaleChange(event: CustomEvent) {
        scale = [ ...event.detail.scale ];
        root = event.detail.root;
    }

    function onFretboardLengthChange(event: CustomEvent) {
        steps = event.detail;
    }

    $: items = createFretboardMatrix(root, scale, steps, [4, 9, 2, 7, 11, 4]).reverse();
</script>

<div>
	<ScaleSelector root={root} scale={scale} on:input={onScaleChange} />
	<br />
	<Fretboard steps={steps} items={items} on:input={onFretboardLengthChange} />
</div>


