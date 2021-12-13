import { InvokeMap } from "./InvokeMap";
import { Wx } from "../wx";

export type InvokeResMock = Partial<Record<keyof InvokeMap, any>>;

export type WxResMock = Partial<Record<keyof Wx, any>>;
