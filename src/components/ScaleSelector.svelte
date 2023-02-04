<script lang="ts">
    import {createEventDispatcher, onMount} from 'svelte';

    const dispatch = createEventDispatcher();

    export let scale: string[];
    export let root: string;

    let scaleAsText: string;

    const buildOutput = (param) => ({
        scale: param.scale, root: param.root
    });

    onMount(() => {
        scaleAsText = scale.join(",");
    });

    function onRootInput(e: Event) {
        dispatch('input', buildOutput({ scale, root: (e.target as HTMLInputElement).value }) );
    }

    function onPatternInput(e: Event) {
        dispatch('input', buildOutput({ scale: (e.target as HTMLInputElement).value.split(","), root }));
    }
</script>

<input type="text" on:input={onRootInput} bind:value={root} />
<input type="text" on:input={onPatternInput} bind:value={scaleAsText}/>
