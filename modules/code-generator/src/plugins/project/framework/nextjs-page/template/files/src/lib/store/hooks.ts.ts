import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
      'hooks',
      'ts',
      `
// This file serves as a central hub for re-exporting pre-typed Redux hooks.
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { AppDispatch, RootState } from "../_store";

// Use throughout your app instead of plain \`useDispatch\` and \`useSelector\`

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;     
    `,
  );

  return [['src', 'lib', 'store'], file];
}
