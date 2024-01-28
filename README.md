# Readthm

- Based on 88 keys piano (A0 ~ C8)
- Checkbox to include type of note inside
- Answers are given 5 closest answer, with upper and lower limit are randomised, then scrambled
- Multiple difficulties
- Future: API to generate note image based on input

- Note images are engraved by Lilypond 2.24.2

Note Categories:

1. Alphabet:
   - Treble clef
   - Bass clef
   - Sharps
   - Flats
2. Count:
   - Semibreve
   - Minim
   - Crotchet
   - Quaver
   - Semiquaver

Modes:

1. Endless
2. Time attack
3. Set questions

Question algorithm:

1. Add selected options to queue
2. Dequeue next question
3. Generate answers (default: 3) based on closely placed notes
4. Randomise position of answers
5. Repeat until queue ends
