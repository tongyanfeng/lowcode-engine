import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
      'AuthComponent',
      'tsx',
      `
import { Component } from "react";
import PropTypes from 'prop-types';
import { getStorageFromKey } from "@/lib/storage/hooks";
interface AuthComState {
  isShow: boolean;
}
export const AuthComponent = (ComposedComponent:any) => class WrapComponent extends Component<{}, AuthComState> {

  constructor(props:any) {
    super(props);
    this.state = { isShow: false };
  }

  componentDidMount() {
    const authority =  getStorageFromKey('userInfo').auth;
    if (authority && authority.indexOf(this.props["auth"]) > -1) {
      this.setState({ isShow: true });
    }
  }

  static propTypes = {
    auth: PropTypes.string.isRequired,
  };

  render() {
    //如果权限有值，并且具备权限，那么创建按钮
    if (this.state.isShow) {
      return <ComposedComponent {...this.props} />;
    } else {
      return null;
      // return <ComposedComponent disabled={true} { ...this.props} /> // 灰质
      // return <ComposedComponent onClick={() => message.info("权限不足，请找管理员申请")} {...this.props} />  // 无权限提示
    }
  }
};    
    `,
  );

  return [['src', 'components', 'common'], file];
}
