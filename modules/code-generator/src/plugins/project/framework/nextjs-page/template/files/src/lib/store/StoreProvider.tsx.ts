import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
      'StoreProvider',
      'tsx',
      `
import { Provider } from "react-redux";
import { store } from "../_store";
import { persistStore } from "redux-persist";
persistStore(store);

export const StoreProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Provider store={store}>{children}</Provider>;
}      
    `,
  );

  return [['src', 'lib', 'store'], file];
}
