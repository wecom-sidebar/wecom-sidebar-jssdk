import { invoke } from "wecom-sidebar-jssdk";
import { fetchKfList } from "../../http";
import { logInfo } from "../../utils";
import { getCurExternalContact } from "../Client/apis";

export const navigateToKfChat = async () => {
  const kfList = await fetchKfList();
  if (kfList.length === 0) {
    logInfo("navigateToKfChat error", "没有客服");
  }
  const [openKfId] = kfList;
  const externalUserId = await getCurExternalContact();
  try {
    const res = await invoke("navigateToAddCustomer", {
      openKfId,
      externalUserId,
    });
    logInfo("navigateToKfChat", JSON.stringify(res));
  } catch (e: any) {
    logInfo("navigateToKfChat error", e.message);
  }
};
