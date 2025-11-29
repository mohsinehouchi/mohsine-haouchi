function gradeAnalyser(notes: Array<number>) {
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i]!;
    if (note > 14) {
      console.log(`Note ${note}: Excellent (A)`);
    } else if (note > 12) {
      console.log(`Note ${note}: Good (B)`);
    } else if (note > 10) {
      console.log(`Note ${note}: Pass (C)`);
    } else if (note > 5) {
      console.log(`Note ${note}: Weak Pass (D)`);
    } else if (note >= 0) {
      console.log(`Note ${note}: Fail (F)`);
    } else {
      console.log(`Note ${note}: Invalid Note`);
    }
  }
}
const student_notes: Array<number> = [15, 9, 11.5, 3, 13.2, 21, -5];
