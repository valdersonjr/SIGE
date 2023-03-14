import {ResponseStudent} from "~/models/datacore";
import FiltersLoading from "~/models/dataview/filters-loading.interface";
import Loading from "~/models/dataview/loading.interface";
import Reload from "~/models/dataview/reload.interface";
import FiltersMethods from "~/models/dataview/filters-methods.interface";
import AllReqDone from "~/models/dataview/all-req-done.interface";

export interface StudentsProps extends FiltersLoading, Loading, Reload, FiltersMethods, AllReqDone {
    students: ResponseStudent[];
    filters: any;
}
