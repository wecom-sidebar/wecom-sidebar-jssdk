import {fetchKfList} from "../../http";
import {jsSdk} from "../../index";
import {logInfo} from "../../utils";
import {getCurExternalContact} from "../Client/apis";

export const navigateToKfChat = async () => {
  const kfList = await fetchKfList();
  if (kfList.length === 0) {
    logInfo('navigateToKfChat error', '没有客服');
  }
  const [openKfId] = kfList;
  const externalUserId = await getCurExternalContact();
  try {
    const res = await jsSdk.invoke('navigateToAddCustomer', {
      openKfId,
      externalUserId,
    });
    logInfo('navigateToKfChat', JSON.stringify(res));
  } catch (e) {
    logInfo('navigateToKfChat error', e.message)
  }
};
