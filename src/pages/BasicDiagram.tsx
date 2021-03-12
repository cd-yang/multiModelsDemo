import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import type { StateType } from '@/models/basicDiagram';
import { connect } from 'dva';

type ConnectState = {
  // global: GlobalModelState;
  // loading: Loading;
  // settings: ProSettings;
  // user: UserModelState;
  // login: StateType;
  basicDiagram: StateType;
};

export type BasicDiagramProps = {
  // dispatch: Dispatch;
};

const BasicDiagram: React.FC<BasicDiagramProps> = () => {
  return (
    <PageHeaderWrapper content="Basic Diagram">
    </PageHeaderWrapper>
  );

}

// export default BasicDiagram;
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default connect(({ basicDiagram }: ConnectState) => ({
  basicDiagram,
}))(BasicDiagram);
