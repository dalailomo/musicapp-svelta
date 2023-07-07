import { createScaleFromPattern, generateNoteArray } from './core';

export const createFretboardMatrix = (
	root: Note,
	pattern: ScalePatternStep[],
	steps: number,
	tuning: number[]
): NoteMeta[][] => {
	const result: NoteMeta[][] = [];

	for (const startingNoteIndex of tuning) {
		const notesInScale = createScaleFromPattern(pattern, root);
		const noteArray = generateNoteArray(startingNoteIndex, steps);
		const subResult: NoteMeta[] = [];

		for (const note of noteArray) {
			subResult.push({ note, degree: notesInScale.indexOf(note) + 1 });
		}

		result.push(subResult);
	}

	return result;
};
