import type { MenuDataItem, Settings as ProSettings } from '@ant-design/pro-layout';
import { GlobalModelState } from './global';
import { UserModelState } from './user';
import type { StateType } from './login';
import type { BasicDiagramState } from '@/models/basicDiagram';
import type { ExtendDiagramState } from '@/models/basicDiagram';

export { GlobalModelState, UserModelState };

export type Loading = {
  global: boolean;
  effects: Record<string, boolean | undefined>;
  models: {
    global?: boolean;
    menu?: boolean;
    setting?: boolean;
    user?: boolean;
    login?: boolean;
  };
};

export type ConnectState = {
  global: GlobalModelState;
  loading: Loading;
  settings: ProSettings;
  user: UserModelState;
  login: StateType;
  basicDiagram: BasicDiagramState;
  extendDiagram: ExtendDiagramState;
};

export type Route = {
  routes?: Route[];
} & MenuDataItem;
