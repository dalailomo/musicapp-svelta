<script lang="ts">
    import {createEventDispatcher} from "svelte";

    const dispatch = createEventDispatcher();

    export let items: Note[][];
    export let steps;

    function onInput(e: Event) {
        dispatch('input', (e.target as HTMLInputElement).value);
    }

    function hasFretMarker(fretNumber: number) {
        if (fretNumber === 1 || fretNumber === 12) return true;
        return [3, 5, 7, 9].indexOf(fretNumber % 12) > -1;
    }
</script>

<input type="number" on:input={onInput} bind:value={steps}/>

<div id="fretboard">
    {#each items as slotLine, j}
        <div class="slot-line">
            {#each slotLine as slot, i}
                <span
                        class="slot"
                        class:zero={i === 0}
                >

                    <span
                            class="note"
                            class:root={slot.degree === 1}
                            class:second={slot.degree === 2}
                            class:third={slot.degree === 3}
                            class:fourth={slot.degree === 4}
                            class:fifth={slot.degree === 5}
                            class:sixth={slot.degree === 6}
                            class:seventh={slot.degree === 7}
                    >{slot.note}</span>
                    <span
                            class="mark"
                            class:hasMarker={hasFretMarker(i) && j === 3}
                    ></span>
                </span>
            {/each}
        </div>
    {/each}
</div>

<style>
    #fretboard {
        font-family: "Courier New", monospace;
    }

    #fretboard .slot-line {
    }

    #fretboard .slot-line .slot {
        position: relative;
        display: inline-block;
        padding: 10px;

        text-align: center;

        box-sizing: border-box;
    }

    #fretboard .slot-line .slot {
        background: #222;
        border-right: 2px solid #282828;
    }

    #fretboard .slot-line .slot.zero {
        border-right: 2px solid #555;
    }

    #fretboard .slot-line .mark {
        position: absolute;
        display: none;
        width: 40px;
        height: 20px;
        background: #111;
        top: 135px;
        left: 5px;
        border-radius: 8px;
    }

    #fretboard .slot-line .mark.hasMarker {
        display: block;
    }

    #fretboard .slot-line .slot .note {
        position: relative;
        display: inline-block;
        padding: 5px;
        width: 20px;
        border-radius: 25px;
        z-index: 10;
    }

    #fretboard .slot-line .slot .note.root {
        background: #be4b4b;
    }
    #fretboard .slot-line .slot .note.second {
        background: #444;
    }
    #fretboard .slot-line .slot .note.third {
        background: #444;

    }
    #fretboard .slot-line .slot .note.fourth {
        background: #444;

    }
    #fretboard .slot-line .slot .note.fifth {
        background: #444;

    }
    #fretboard .slot-line .slot .note.sixth {
        background: #444;

    }
    #fretboard .slot-line .slot .note.seventh {
        background: #444;

    }
</style>