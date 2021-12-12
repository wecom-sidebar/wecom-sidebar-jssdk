import { WxInvokeCallbackRes } from "./common";

export type SelectEnterpriseContactParams = {
  fromDepartmentId: -1 | 0; // 必填，表示打开的通讯录从指定的部门开始展示，-1表示自己所在部门开始, 0表示从最上层开始
  mode: "single" | "multi"; // 必填，选择模式，single表示单选，multi表示多选
  type: string[]; // 必填，选择限制类型，指定department、user中的一个或者多个
  selectedDepartmentIds?: string[]; // 非必填，已选部门ID列表。用于多次选人时可重入，single模式下请勿填入多个id
  selectedUserIds?: string[]; // 非必填，已选用户ID列表。用于多次选人时可重入，single模式下请勿填入多个id
};

export type SelectEnterpriseContactRes = WxInvokeCallbackRes & {
  result:
    | string
    | {
        departmentList: {
          id: string; // 已选的单个部门ID
          name: string; // 已选的单个部门名称
        }[]; // 已选的部门列表
        userList: {
          id: string; // 已选的单个成员ID
          name: string; // 已选的单个成员名称
          avatar: string; // 已选的单个成员头像
        }[]; // 已选的用户
      };
};

export type OpenUserProfileParams = {
  type: 1 | 2; // 1表示该userid是企业成员，2表示该userid是外部联系人
  userid: string; // 可以是企业成员，也可以是外部联系人
};

export type OpenUserProfileRes = WxInvokeCallbackRes;

export type SelectCorpGroupContactParams = {
  fromDepartmentId: -1 | 0; // 必填，表示打开的通讯录从指定的部门开始展示，-1表示打开的通讯录从自己所在部门开始展示, 0表示从最上层开始。移动端，当需要展开的部门不在应用可见范围内，则从应用的可见范围开始展开。
  mode: "single" | "multi"; // 必填，选择模式，single表示单选，multi表示多选
  type: string[]; // 必填，选择限制类型，指定department、user中的一个或者多个
  selectedDepartmentIds?: string[]; // 非必填，已选部门ID列表。用于多次选人时可重入
  selectedUserIds?: string[]; // 非必填，仅自建应用使用，第三方应用会忽略该字段，已选用户ID列表。用于多次选人时可重入
  selectedOpenUserIds?: string[]; // 非必填，仅第三方应用使用，自建应用会忽略该字段，已选用户ID列表。用于多次选人时可重入
  selectedChainDepartmentIds?: {
    // 非必填，已选上下游部门ID列表。用于多次选人时可重入
    corpId: string; // 企业CORPID
    departmentId: string; // 部门ID
  }[];
  selectedChainUserIds?: {
    // 非必填，已选上下游用户ID列表。用于多次选人时可重入
    corpId: string; // 企业CORPID
    userId: string; // 成员ID，仅自建应用返回
    openUserId: string; // 成员OPEN_USERID，仅第三方应用返回
  }[];
  selectedCorpGroupDepartmentIds?: {
    corpId: string; // 企业CORPID
    departmentId: string; // 部门ID
  }[];
  selectedCorpGroupUserIds?: {
    corpId: string; // 企业CORPID
    userId: string; // 成员ID，仅自建应用返回
    openUserId: string; // 成员OPEN_USERID，仅第三方应用返回
  }[]; // 非必填，已选企业互联用户ID列表。用于多次选人时可重入
};

export type SelectCorpGroupContactRes = WxInvokeCallbackRes & {
  result:
    | string
    | {
        departmentList?: {
          id: string; // 已选的单个部门ID
        }[];
        userList?: {
          id: string; // 已选的单个成员ID，仅自建应用返回
          openUserId: string; // 已选的单个成员ID，仅第三方应用返回
        }[];
        corpGroupDepartmentList?: {
          corpId: string; // 企业CORPID
          id: string; // 已选的单个部门ID
        }[];
        corpGroupUserList?: {
          corpId: string; // 企业CORPID
          id: string; // 已选的单个成员ID，仅自建应用返回
          openUserId: string; // 已选的单个成员ID，仅第三方应用返回
        }[];
        chainDepartmentList?: {
          corpId: string; // 企业CORPID
          id: string; // 已选的单个部门ID
        }[];
        chainUserList?: {
          corpId: string; // 企业CORPID
          id: string; // 已选的单个成员ID，仅自建应用返回
          openUserId: string; // 已选的单个成员ID，仅第三方应用返回
        }[];
      };
};

export type SelectPrivilegedContactParams = {
  fromDepartmentId: -1 | 0; // 必填，表示打开的通讯录从指定的部门开始展示，-1表示自己所在部门开始, 0表示从最上层开始
  mode: "multi" | "single"; // 必填，选择模式，single表示单选，multi表示多选
  selectedContextContact?: 1 | 0; // 是否勾选当前环境的参与者。1表示是，0表示否。
  selectedOpenUserIds?: string[]; // 非必填，已选用户OpenID列表。single模式忽略该参数。
  selectedTickets?: string[]; // 非必填，已选ticket列表。single模式忽略该参数
};

export type SelectPrivilegedContactRes = {
  userList?: {
    // 已选的成员列表
    openUserId: string; // 成员openUserId
  }[];
  selectedTicket: string; // 已选的集合Ticket
  expiresIn: number; // ticket有效期
  selectedUserCount: number; // 用户选中的用户个数
};

export type ClaimClassAdminRes = WxInvokeCallbackRes & {
  departmentIds: string[]; // 认领的班级部门id列表
};
