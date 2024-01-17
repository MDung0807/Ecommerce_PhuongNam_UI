import { MenuProps } from "antd";
import MenuItem from "antd/es/menu/MenuItem";
type MenuItem = Required<MenuProps>['items'][number];


function GetItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
};

export default GetItem; 