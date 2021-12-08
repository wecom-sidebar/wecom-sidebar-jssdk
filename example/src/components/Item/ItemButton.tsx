import React, {FC, useContext, useMemo} from "react";
import {Button, ButtonProps} from "antd";
import {SidebarContext} from "../../App";

interface Props extends ButtonProps {}

const ItemButton: FC<Props> = (props) => {
  const {children, ...restProps} = props;

  const context = useContext(SidebarContext);

  const enabled = useMemo(() => {
    return (context.enabledApiList || []).some(api => (children as string).includes(api));
  }, [children, context.enabledApiList])

  return (
    <li>
      <Button {...restProps} type={enabled ? 'primary' : 'dashed'} block>{children}</Button>
    </li>
  )
}

export default ItemButton;
