export const SCALE_PATTERN_STEP = {
    whole: "W",
    half: "H",
    augmented: "+"
}

export const NOTE_TAG = [
    'C',    // 0
    'C#',   // 1
    'D',    // 2
    'D#',   // 3
    'E',    // 4
    'F',    // 5
    'F#',   // 6
    'G',    // 7
    'G#',   // 8
    'A',    // 9
    'A#',   // 10
    'B',    // 11
];

export const createScaleFromPattern = (scalePattern: string[], baseNote: string): string[] => {
    let currentStep = NOTE_TAG.indexOf(baseNote);
    const result: any[] = [];
    result.push(NOTE_TAG[currentStep]);

    for (const scalePatternItem of scalePattern) {
        if (scalePatternItem === SCALE_PATTERN_STEP.whole) {
            currentStep++;
        } else if (scalePatternItem === SCALE_PATTERN_STEP.augmented) {
            currentStep++;
            currentStep++;
        }

        if (currentStep >= NOTE_TAG.length) {
            currentStep = currentStep - (NOTE_TAG.length);
        }

        currentStep++;
        result.push(NOTE_TAG[currentStep]);
    }

    return result;
};

export const generateNoteArray = (initialNoteTagIndex: number, steps: number): string[] => {
    const result: any[] = [];
    const totalNotes = NOTE_TAG.length;
    let currentFret = 0;
    let currentNote = initialNoteTagIndex;

    const sanitizeNote = (note: number, limit: number): number => {
        if (note < limit) return note;
        const sanitizedNote = note - limit;
        if (sanitizedNote >= limit) return sanitizeNote(sanitizedNote, limit);
        if (sanitizedNote < limit) return sanitizedNote;
        return sanitizeNote(sanitizedNote, limit) - limit;
    }

    while (currentFret < steps) {
        currentNote = sanitizeNote(currentNote, totalNotes);
        result.push(NOTE_TAG[currentNote]);
        currentFret++;
        currentNote++;
    }

    return result;
};
