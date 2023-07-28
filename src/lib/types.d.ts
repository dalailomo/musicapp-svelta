declare type Note = 'C' | 'C#' | 'D' | 'D#' | 'E' | 'F' | 'F#' | 'G' | 'G#' | 'A' | 'A#' | "B";

declare type NoteMeta = { note: Note; degree: number };

declare type ScalePatternStep = 'H' | 'W' | '3H' | '2W' | '5H'

declare type ScaleName =
    'chromatic' | 
    'major' | 
    'half-diminished' | 
    'harmonic-major' | 
    'harmonic-minor' | 
    'blues' | 
    'enigmatic' | 
    'gipsy' | 
    'hungarian-gipsy' | 
    'hungarian-major' | 
    'in' | 
    'insen' | 
    'hirajoshi' | 
    'istrian' | 
    'iwato' | 
    'lydian-augmented' | 
    'lydian-diminished' | 
    'melodic-minor-ascending' | 
    'melodic-minor-descending' | 
    'major-pentatonic' | 
    'minor-pentatonic' | 
    'neapolitan-major' | 
    'neapolitan-minor' | 
    'octatonic-1' | 
    'octatonic-2' | 
    'persian' | 
    'prometheus' | 
    'harmonics' | 
    'tritone' | 
    'two-semitone-tritone' | 
    'ukrainian-dorian' | 
    'whole-tone' | 
    'yo'

declare type ScaleObject = { [key in ScaleName]: ScalePatternStep[] }
