import {SidebarMode} from "~/models/dataview/sidebar-mode.enum";

export default interface SideBarProps {
    mode: SidebarMode;
    setMode: (mode: SidebarMode) => void;
}
