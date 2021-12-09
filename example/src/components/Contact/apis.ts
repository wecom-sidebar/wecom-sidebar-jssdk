import { invoke } from "wecom-sidebar-jssdk";
import { logInfo } from "../../utils";
import { getCurExternalContact } from "../Client/apis";

export const selectEnterpriseContact = async () => {
  const res = await invoke("selectEnterpriseContact", {
    fromDepartmentId: -1, // 必填，表示打开的通讯录从指定的部门开始展示，-1表示自己所在部门开始, 0表示从最上层开始
    mode: "multi", // 必填，选择模式，single表示单选，multi表示多选
    type: ["department", "user"], // 必填，选择限制类型，指定department、user中的一个或者多个
  });
  logInfo("selectEnterpriseContact", JSON.stringify(res));
};

export const openUserProfile = async () => {
  const externalUserId = await getCurExternalContact();

  if (!externalUserId) return;

  const res = await invoke("openUserProfile", {
    type: 2, //1表示该userid是企业成员，2表示该userid是外部联系人
    userid: externalUserId, //可以是企业成员，也可以是外部联系人
  });
  logInfo("openUserProfile", JSON.stringify(res));
};

export const selectCorpGroupContact = async () => {
  try {
    const res = await invoke("selectCorpGroupContact", {
      fromDepartmentId: -1, // 必填，表示打开的通讯录从指定的部门开始展示，-1表示打开的通讯录从自己所在部门开始展示, 0表示从最上层开始。移动端，当需要展开的部门不在应用可见范围内，则从应用的可见范围开始展开。
      mode: "single", // 必填，选择模式，single表示单选，multi表示多选
      type: ["department", "user"], // 必填，选择限制类型，指定department、user中的一个或者多个
    });
    logInfo("selectCorpGroupContact", JSON.stringify(res));
  } catch (err: any) {
    logInfo("selectCorpGroupContact error", err.message);
  }
};

export const claimClassAdmin = async () => {
  try {
    const res = await invoke("claimClassAdmin", {});
    logInfo("claimClassAdmin", JSON.stringify(res));
  } catch (err: any) {
    logInfo("claimClassAdmin error", err.message);
  }
};
