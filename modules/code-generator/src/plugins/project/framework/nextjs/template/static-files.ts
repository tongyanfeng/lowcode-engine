import { ResultDir } from '@alilc/lowcode-types';

import { createResultDir } from '../../../../../utils/resultHelper';
import { runFileGenerator } from '../../../../../utils/templateHelper';

import tsconfig from './files/tsconfig.json';
import tailwind_config from './files/tailwind.config.ts';
import README from './files/README.md';
import postcss_config_js from './files/postcss.config.js';
import package_json from './files/package.json';
import next_config from './files/next.config.js';
import next_env_d from './files/next-env.d';
import env from './files/env';
import env_production from './files/env.production';

import utils from './files/src/utils/utils.js';
import DateUtil from './files/src/utils/DateUtil.js';
import constants from './files/src/utils/constants.js';
import Authorized from './files/src/utils/Authorized.js';
import authority from './files/src/utils/authority.js';

import theme_config from './files/src/theme/themeConfig.ts';

import s_README from './files/src/services/README.md';
import s_hook from './files/src/services/hooks.ts';
import request from './files/src/services/request.ts';
import dictMapRequest from './files/src/services/sys/dictMapRequest.ts';
import s_index from './files/src/services/sys/index.ts';
import sysAuth from './files/src/services/sys/sysAuth.ts';
import s_t_api from './files/src/services/app/TableDetail/api.ts';
import s_t_index from './files/src/services/app/TableDetail/index.ts';
import s_user from './files/src/services/app/user.ts';

import m_README from './files/src/models/README.md';
import m_index from './files/src/models/index.ts';
import m_authSlice from './files/src/models/authSlice.ts';
import m__sysInfoSlice from './files/src/models/_sysInfoSlice.ts';
import m_counterAPI from './files/src/models/counter/counterAPI.ts';
import m_counterSlice from './files/src/models/counter/counterSlice.ts';

import routes from './files/src/lib/routes.tsx';
import l_interface from './files/src/lib/interface.ts';
import l_getInitialState from './files/src/lib/getInitialState.ts';
import l_definitions from './files/src/lib/definitions.ts';
import l_AntdRegistry from './files/src/lib/AntdRegistry.tsx';
import l_access from './files/src/lib/access.ts';
import l__storete from './files/src/lib/_store.ts';
import l_defaultProps from './files/src/lib/_defaultProps.tsx';
import l_s_hooks from './files/src/lib/store/hooks.ts';
import l_s_hStoreProvider from './files/src/lib/store/StoreProvider.tsx';
import l_s_createAppSlice from './files/src/lib/store/createAppSlice.ts';
import l_st_config from './files/src/lib/storage/config.ts';
import l_st_encrypt from './files/src/lib/storage/encrypt.ts';
import l_st_hooks from './files/src/lib/storage/hooks.ts';


import lay_StateLayout from './files/src/layout/StateLayout.tsx';
import lay_README from './files/src/layout/README.md';
import lay_BasicLayout from './files/src/layout/BasicLayout.tsx';
import lay_utils from './files/src/layout/utils.ts';



import app_page from './files/src/app/page.tsx';
import app_not_found from './files/src/app/not-found.tsx';
import app_loading from './files/src/app/loading.tsx';
import app_layout from './files/src/app/layout.tsx';
import app_globals_css from './files/src/app/globals.css';
import app_error from './files/src/app/error.tsx';

import app_m_page from './files/src/app/manage/page.tsx';

import public_next_svg from './files/public/next.svg';
import public_vercel_svg from './files/public/vercel.svg';

export function generateStaticFiles(root = createResultDir('.')): ResultDir {
  runFileGenerator(root, tsconfig);
  runFileGenerator(root, tailwind_config);
  runFileGenerator(root, README);
  runFileGenerator(root, postcss_config_js);
  // runFileGenerator(root, package_lock_json);
  // runFileGenerator(root, package_json);
  runFileGenerator(root, next_env_d);
  runFileGenerator(root, next_config);
  runFileGenerator(root, env);
  runFileGenerator(root, env_production);
  runFileGenerator(root, utils);
  runFileGenerator(root, DateUtil);
  runFileGenerator(root, constants);
  runFileGenerator(root, Authorized);
  runFileGenerator(root, authority);
  runFileGenerator(root, theme_config);

  runFileGenerator(root, s_README);
  runFileGenerator(root, s_hook);
  runFileGenerator(root, request);
  runFileGenerator(root, dictMapRequest);
  runFileGenerator(root, s_index);
  runFileGenerator(root, sysAuth);
  runFileGenerator(root, s_t_api);
  runFileGenerator(root, s_t_index);
  runFileGenerator(root, s_user);

  runFileGenerator(root, m_README);
  runFileGenerator(root, m_index);
  runFileGenerator(root, m_authSlice);
  runFileGenerator(root, m__sysInfoSlice);
  runFileGenerator(root, m_counterAPI);
  runFileGenerator(root, m_counterSlice);

  runFileGenerator(root, routes);
  runFileGenerator(root, l_interface);
  runFileGenerator(root, l_getInitialState);
  runFileGenerator(root, l_definitions);
  runFileGenerator(root, l_AntdRegistry);
  runFileGenerator(root, l_access);
  runFileGenerator(root, l__storete);
  runFileGenerator(root, l_defaultProps);
  runFileGenerator(root, l_s_hooks);
  runFileGenerator(root, l_s_hStoreProvider);
  runFileGenerator(root, l_s_createAppSlice);
  runFileGenerator(root, l_st_hooks);
  runFileGenerator(root, l_st_encrypt);
  runFileGenerator(root, l_st_config);

  runFileGenerator(root, lay_StateLayout);
  runFileGenerator(root, lay_README);
  runFileGenerator(root, lay_BasicLayout);
  runFileGenerator(root, lay_utils);

  runFileGenerator(root, app_page);
  runFileGenerator(root, app_not_found);
  runFileGenerator(root, app_loading);
  runFileGenerator(root, app_layout);
  runFileGenerator(root, app_globals_css);
  runFileGenerator(root, app_error);

  runFileGenerator(root, public_next_svg);
  runFileGenerator(root, public_vercel_svg);

  return root;
}
