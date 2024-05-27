import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
      '_defaultProps',
      'tsx',
      `
export default {
  title:"",
  location: {
    pathname: '/',
  },
  appList: [],
  token:{
    header: {
      colorBgHeader: '#001529',
      colorHeaderTitle: '#fff',
      colorTextMenu: '#dfdfdf',
      colorTextMenuSecondary: '#dfdfdf',
      colorTextMenuSelected: '#fff',
      colorBgMenuItemSelected: '#22272b',
      colorTextMenuActive: 'rgba(255,255,255,0.85)',
      colorTextRightActionsItem: '#dfdfdf',
    },
    colorTextAppListIconHover: '#fff',
    colorTextAppListIcon: '#dfdfdf',
    sider: {
      colorMenuBackground: '#fff',
      colorMenuItemDivider: '#dfdfdf',
      colorBgMenuItemHover: '#f6f6f6',
      colorTextMenu: '#595959',
      colorTextMenuSelected: '#242424',
      colorTextMenuActive: '#242424',
    },
  }
};
    `,
  );

  return [['src', 'lib'], file];
}
