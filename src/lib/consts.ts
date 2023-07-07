export const NOTES: Note[] = [
	'C', // 0
	'C#', // 1
	'D', // 2
	'D#', // 3
	'E', // 4
	'F', // 5
	'F#', // 6
	'G', // 7
	'G#', // 8
	'A', // 9
	'A#', // 10
	'B' // 11
];

// reference: https://en.wikipedia.org/wiki/List_of_musical_scales_and_modes
export const SCALE: ScaleObject = {
	// H-H-H-H-H-H-H-H-H-H-H-H
	chromatic: ['H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H', 'H'],

	// W-W-H-W-W-W-H
	major: ['W', 'W', 'H', 'W', 'W', 'W', 'H'],

	// W-H-W-H-W-W-W
	'half-diminished': ['W', 'H', 'W', 'H', 'W', 'W', 'W'],

	// W-W-H-W-H-3H-H
	'harmonic-major': ['W', 'W', 'H', 'W', 'H', '3H', 'H'],

	// W-H-W-W-H-3H-H
	'harmonic-minor': ['W', 'H', 'W', 'W', 'H', '3H', 'H'],

	// 3H-W-H-H-3H-W
	blues: ['3H', 'H', 'H', 'H', '3H', 'H'],

	// H-3H-W-W-W-H-H
	enigmatic: ['H', '3H', 'H', 'H', 'H', 'H', 'H'],

	// W-H-3H-H-H-W-W
	gipsy: ['H', 'H', '3H', 'H', 'H', 'H', 'H'],

	// W-H-3H-H-H-3H-H
	'hungarian-gipsy': ['W', 'H', '3H', 'H', 'H', '3H', 'H'],

	// 3H-H-W-H-W-H-W
	'hungarian-major': ['3H', 'H', 'W', 'H', 'W', 'H', 'W'],

	// H-2W-W-H-2W
	in: ['H', '2W', 'W', 'H', '2W'],

	// H-2W-W-3H-W
	insen: ['H', '2W', 'W', '3H', 'W'],

	// 2W-W-H-2W-H
	hirajoshi: ['2W', 'W', 'H', '2W', 'H'],

	// H-W-H-W-H-5H
	istrian: ['H', 'W', 'H', 'W', 'H', '5H'],

	// H-2W-H-2W-W
	iwato: ['H', '2W', 'H', '2W', 'W'],

	// W-W-W-W-H-W-H
	'lydian-augmented': ['W', 'W', 'W', 'W', 'H', 'W', 'H'],

	// W-H-3H-H-H-W-H
	'lydian-diminished': ['W', 'H', '3H', 'H', 'H', 'W', 'H'],

	// W-H-W-W-W-W-H
	'melodic-minor-ascending': ['W', 'H', 'W', 'W', 'W', 'W', 'H'],

	// W-W-H-W-W-H-W
	'melodic-minor-descending': ['W', 'W', 'H', 'W', 'W', 'H', 'W'],

	// W-W-3H-W-3H
	'major-pentatonic': ['W', 'W', '3H', 'W', '3H'],

	// 3H-W-W-3H-W
	'minor-pentatonic': ['3H', 'W', 'W', '3H', 'W'],

	// H-W-W-W-W-W-H
	'neapolitan-major': ['H', 'W', 'W', 'W', 'W', 'W', 'H'],

	// H-W-W-W-H-3H-H
	'neapolitan-minor': ['H', 'W', 'W', 'W', 'H', '3H', 'H'],

	// H-W-W-W-H-3H-H
	'octatonic-1': ['H', 'W', 'W', 'W', 'H', '3H', 'H'],

	// H-W-H-W-H-W-H-W
	'octatonic-2': ['H', 'W', 'H', 'W', 'H', 'W', 'H'],

	// H-3H-H-H-W-3H-H
	persian: ['H', '3H', 'H', 'H', 'W', '3H', 'H'],

	// W-W-W-3H-H-W
	prometheus: ['W', 'W', 'W', '3H', 'H', 'W'],

	// 3H-H-H-W-W-3H
	harmonics: ['3H', 'H', 'H', 'W', 'W', '3H'],

	// H-3H-W-H-3H-W
	tritone: ['H', '3H', 'W', 'H', '3H', 'W'],

	// H-H-4H-H-H-4H
	'two-semitone-tritone': ['H', 'H', '2W', 'H', 'H', '2W'],

	// W-H-3H-H-W-H-W
	'ukrainian-dorian': ['W', 'H', '3H', 'H', 'W', 'H', 'W'],

	// W-W-W-W-W-W
	'whole-tone': ['W', 'W', 'W', 'W', 'W', 'W'],

	// 3H-W-W-3H-W
	yo: ['3H', 'W', 'W', '3H', 'W']
};
