// The Tired Dark Lord: a 100-word villain monologue (Node 22, standard library only).
//
// The entry writes one fixed text to /output/entry.txt. Nothing is read from the network, the
// environment, or any file beside this one, so two runs write the same bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// One monologue, ~103 words: a besieging necromancer who was drowned by his own brother and came
// back with the marsh still in his throat. The tiredness lives in the clipped fragments, the
// self-interruptions and the deflections ("Not a complaint. An ingredient."), never in a stated
// weariness; the last line spends the menace on wanting a quiet bell at a decent hour.
const MONOLOGUE = [
  'Third gate. Not the second \u2014 the second\u2019s hinge has shrieked at me since spring,',
  'and I wrote the castellan twice about it. So. Third gate.',
  'Ram at dawn, or thereabouts; the sun keeps its own hours and I have stopped asking.',
  'My brother drowned me in the salt marsh past the weir.',
  'The marsh gave me back with the salt still in my throat,',
  'so every spell since tastes of that water. Not a complaint. An ingredient.',
  'The city falls by supper. Then I raise the bell-ringers, all of them,',
  'and they ring the hour for me. Quietly. One bell. A decent hour.',
].join(' ');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), `${MONOLOGUE}\n`, 'utf8');
