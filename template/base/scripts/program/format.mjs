#!/usr/bin/env zx
import 'zx/globals';
import { workingDirectory, getProgramFolders } from '../utils.mjs';

// Format the programs.
await Promise.all(
  getProgramFolders().map(async (folder) => {
    cd(`${path.join(workingDirectory, folder)}`);
    await $`cargo fmt ${process.argv.slice(3)}`;
  })
);
