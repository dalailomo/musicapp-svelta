const H = 'H';
const W = 'W';
const WH = '3H';
const WW = '2W';
const WWH = '5H';

export const SCALE_PATTERN_STEP = {
	H,
	W,
	WH,
	WW,
	WWH
};

export const NOTE_TAG = [
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

export const SCALE = {
	// H-H-H-H-H-H-H-H-H-H-H-H
	chromatic: [H, H, H, H, H, H, H, H, H, H, H, H],

	// W-W-H-W-W-W-H
	major: [W, W, H, W, W, W, H],

	// W-H-W-H-W-W-W
	'half-diminished': [H, H, H, H, H, H, H],

	// W-W-H-W-H-3H-H
	'harmonic-major': [W, W, H, W, H, WH, H],

	// W-H-W-W-H-3H-H
	'harmonic-minor': [W, H, W, W, H, WH, H],

	// 3H-W-H-H-3H-W
	blues: [WH, H, H, H, WH, H],

	// H-3H-W-W-W-H-H
	enigmatic: [H, WH, H, H, H, H, H],

	// W-H-3H-H-H-W-W
	gipsy: [H, H, WH, H, H, H, H],

	// W-H-3H-H-H-3H-H
	'hungarian-gipsy': [W, H, WH, H, H, WH, H],

	// 3H-H-W-H-W-H-W
	'hungarian-major': [WH, H, W, H, W, H, W],

	// H-2W-W-H-2W
	in: [H, WW, W, H, WW],

	// H-2W-W-3H-W
	insen: [H, WW, W, WH, W],

	// 2W-W-H-2W-H
	hirajoshi: [WW, W, H, WW, H],

	// H-W-H-W-H-5H
	istrian: [H, W, H, W, H, WWH],

	// H-2W-H-2W-W
	iwato: [H, WW, H, WW, W],

	// W-W-W-W-H-W-H
	'lydian-augmented': [W, W, W, W, H, W, H],

	// W-H-3H-H-H-W-H
	'lydian-diminished': [W, H, WH, H, H, W, H],

	// W-H-W-W-W-W-H
	'melodic-minor-ascending': [W, H, W, W, W, W, H],

	// W-W-H-W-W-H-W
	'melodic-minor-descending': [W, W, H, W, W, H, W],

	// W-W-3H-W-3H
	'major-pentatonic': [W, W, WH, W, WH],

	// 3H-W-W-3H-W
	'minor-pentatonic': [WH, W, W, WH, W],

	// H-W-W-W-W-W-H
	'neapolitan-major': [H, W, W, W, W, W, H],

	// H-W-W-W-H-3H-H
	'neapolitan-minor': [H, W, W, W, H, WH, H],

	// H-W-W-W-H-3H-H
	'octatonic-1': [H, W, W, W, H, WH, H],

	// H-W-H-W-H-W-H-W
	'octatonic-2': [H, W, H, W, H, W, H],

	// H-3H-H-H-W-3H-H
	persian: [H, WH, H, H, W, WH, H],

	// W-W-W-3H-H-W
	prometheus: [W, W, W, WH, H, W],

	// 3H-H-H-W-W-3H
	harmonics: [WH, H, H, W, W, WH],

	// H-3H-W-H-3H-W
	tritone: [H, WH, W, H, WH, W],

	// H-H-4H-H-H-4H
	'two-semitone-tritone': [H, H, WW, H, H, WW],

	// W-H-3H-H-W-H-W
	'ukrainian-dorian': [W, H, WH, H, W, H, W],

	// W-W-W-W-W-W
	'whole-tone': [W, W, W, W, W, W],

	// 3H-W-W-3H-W
	yo: [WH, W, W, WH, W]
};
