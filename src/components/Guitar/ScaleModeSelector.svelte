<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import IconButton from '@smui/icon-button';
	import ItemLane from '../Common/ItemLane.svelte';
	import TextSpan from '../Common/TextSpan.svelte';

    export let scale: ScalePatternStep[];

	const dispatch = createEventDispatcher();

    function onModeChange(method: 'pop' | 'shift') {
		const s = [...scale];
		const e: ScalePatternStep = s[method]() as ScalePatternStep;
		const s2 = method === 'pop' ? [e, ...s] : [...s, e];
		dispatch('mode-selected', s2);
	}
</script>

<ItemLane>
	<TextSpan>Scale mode:</TextSpan>
	<IconButton class="material-icons"  on:click={() => onModeChange('pop')}>navigate_before</IconButton>
	<TextSpan><big><code>{scale.join('-')}</code></big></TextSpan>
	<IconButton class="material-icons"  on:click={() => onModeChange('shift')}>navigate_next</IconButton>
</ItemLane>
