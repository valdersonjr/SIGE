import {SidebarMode} from "~/models/dataview/sidebar-mode.enum";

export interface ISideBarSections {
    name: string;
    path: string;
    key: string;
}

export interface NavigationProps {
    mode: SidebarMode;
}
