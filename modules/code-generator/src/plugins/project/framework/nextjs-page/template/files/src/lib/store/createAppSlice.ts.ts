import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
      'createAppSlice',
      'ts',
      `
import { asyncThunkCreator, buildCreateSlice } from "@reduxjs/toolkit";

// \`buildCreateSlice\` allows us to create a slice with async thunks.
export const createAppSlice = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});      
    `,
  );

  return [['src', 'lib', 'store'], file];
}
