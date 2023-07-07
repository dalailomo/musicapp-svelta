import { NOTES } from './consts';

export const createScaleFromPattern = (scalePattern: ScalePatternStep[], baseNote: Note): Note[] => {
	let currentStep = NOTES.indexOf(baseNote);
	const result: Note[] = [];
	result.push(NOTES[currentStep]);

	for (const scalePatternItem of scalePattern) {
		if (scalePatternItem === 'W') {
			currentStep++;
		} else if (scalePatternItem === '3H') {
			currentStep++;
			currentStep++;
		} else if (scalePatternItem === '2W') {
			currentStep++;
			currentStep++;
			currentStep++;
		} else if (scalePatternItem === '5H') {
			currentStep++;
			currentStep++;
			currentStep++;
			currentStep++;
		}

		// there is always a H step
		currentStep++;

		if (currentStep >= NOTES.length) {
			currentStep = currentStep - NOTES.length;
		}

		result.push(NOTES[currentStep]);
	}

	return result;
};

export const generateNoteArray = (initialNoteTagIndex: number, steps: number): Note[] => {
	const result: any[] = [];
	const totalNotes = NOTES.length;
	let currentFret = 0;
	let currentNote = initialNoteTagIndex;

	const sanitizeNote = (note: number, limit: number): number => {
		if (note < limit) return note;
		const sanitizedNote = note - limit;
		if (sanitizedNote >= limit) return sanitizeNote(sanitizedNote, limit);
		if (sanitizedNote < limit) return sanitizedNote;
		return sanitizeNote(sanitizedNote, limit) - limit;
	};

	while (currentFret < steps) {
		currentNote = sanitizeNote(currentNote, totalNotes);
		result.push(NOTES[currentNote]);
		currentFret++;
		currentNote++;
	}

	return result;
};
