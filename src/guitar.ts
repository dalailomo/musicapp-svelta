import {createScaleFromPattern, generateNoteArray} from "./core";

declare type Note = { note: string, degree: number };
export const createFretboardMatrix = (root: string, pattern: string[], steps: number, tuning: number[]): Note[][] => {
    const result: Note[][] = [];

    for (const startingNoteIndex of tuning) {
        const notesInScale = createScaleFromPattern(pattern, root);
        const noteArray = generateNoteArray(startingNoteIndex, steps);
        const subResult: Note[] = [];

        for (const note of noteArray) {
            subResult.push({ note, degree: notesInScale.indexOf(note) + 1})
        }

        result.push(subResult);
    }

    return result;
};
