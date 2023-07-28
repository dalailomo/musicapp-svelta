<script lang="ts">
	import { NOTES } from '$lib/consts';
	import { createEventDispatcher } from 'svelte';
	import Select, { Option } from '@smui/select';
	import IconButton from '@smui/icon-button';
	import ItemLane from '../Common/ItemLane.svelte';
	const dispatch = createEventDispatcher();

    export let tunningNotes: Note[];

	const noteList: Note[] = NOTES;

    function onTuneChanged(i: number, value: any) {
        console.log(i, value)
        const localTunning = [...tunningNotes];
        localTunning[i] = value
        dispatch('on-tune-change', localTunning);
    }

    function onUnshiftString() {
        const localTunning = [...tunningNotes];
        localTunning.unshift("C")
        dispatch('on-tune-change', localTunning);
    }

    function onShiftString() {
        const localTunning = [...tunningNotes];
        localTunning.shift()
        dispatch('on-tune-change', localTunning);
    }

    function onPushString() {
        const localTunning = [...tunningNotes];
        localTunning.push("C")
        dispatch('on-tune-change', localTunning);
    }

    function onPopString() {
        const localTunning = [...tunningNotes];
        localTunning.pop()
        dispatch('on-tune-change', localTunning);
    }
</script>

<br />
<ItemLane>
    <IconButton class="material-icons" on:click={onShiftString}>remove</IconButton>
    <IconButton class="material-icons" on:click={onUnshiftString}>add</IconButton>

    <div class="select-hack-width">
        {#each tunningNotes as note, tunningIndex}
            <Select bind:value={note} variant="filled" on:SMUISelect:change={(e) => onTuneChanged(tunningIndex, e.detail.value)}>
                {#each noteList as noteListName}
                    <Option value={noteListName}>
                        {noteListName}
                    </Option>
                {/each}
            </Select>
        {/each}
    </div>

    <IconButton class="material-icons" on:click={onPushString}>add</IconButton>
    <IconButton class="material-icons" on:click={onPopString}>remove</IconButton>
</ItemLane>