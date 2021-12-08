import React, {FC, useContext, useMemo} from "react";
import {Switch, SwitchProps} from "antd";
import {SidebarContext} from "../../App";

interface Props extends SwitchProps {}

const ItemSwitch: FC<Props> = (props) => {
  const {children, ...restProps} = props;

  const context = useContext(SidebarContext);

  const enabled = useMemo(() => {
    return (context.enabledApiList || []).some(api => (children as string).includes(api));
  }, [children, context.enabledApiList])

  return (
    <li>
      <span>{children}</span>
      <Switch {...restProps} disabled={!enabled} />
    </li>
  )
}

export default ItemSwitch;
