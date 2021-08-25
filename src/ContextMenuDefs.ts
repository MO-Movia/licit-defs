/* Context Menu Helpers */

/* eslint-disable  @typescript-eslint/no-explicit-any */
export declare type fnCB = (x: any) => void;

export declare type Action = {
  tooltip?: string;
  image?: string;
  handler?: fnCB;
};

export declare type CMElement = {
  name?: string;
  actions?: Action[];
  defaultAction?: fnCB;
  value?: string;
  prefix?: string;
  submenu?: CMGroup[];
};

export declare type CMGroup = {
  endHR?: boolean;
  scrollable?: boolean;
  elements?: CMElement[];
};
