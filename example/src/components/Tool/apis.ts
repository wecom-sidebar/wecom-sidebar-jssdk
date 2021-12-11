import { invoke } from "wecom-sidebar-jssdk";
import { getUserId, logInfo } from "../../utils";

export const startMeeting = async () => {
  try {
    const userId = (await getUserId()) || "";

    const res = await invoke("startMeeting", {
      meetingType: 0,
      theme: "员工大会",
      attendees: [userId],
      // 给对方打电话
      // externalAttendees: [externalUserId],
    });
    logInfo("startMeeting", JSON.stringify(res));
  } catch (e: any) {
    logInfo("startMeeting error", e.message);
  }
};

export const startLiving = async () => {
  try {
    const res = await invoke("startLiving", {
      liveType: 0,
      theme: "新同学培训",
    });
    logInfo("startLiving", JSON.stringify(res));
  } catch (e: any) {
    logInfo("startLiving error", e.message);
  }
};

export const replayLiving = async (livingId: string) => {
  try {
    const res = await invoke("replayLiving", {
      livingId,
    });
    logInfo("replayLiving", JSON.stringify(res));
  } catch (e: any) {
    logInfo("replayLiving error", e.message);
  }
};

export const downloadLivingReplay = async (livingId: string) => {
  try {
    const res = await invoke("downloadLivingReplay", {
      livingId,
    });
    logInfo("downloadLivingReplay", JSON.stringify(res));
  } catch (e: any) {
    logInfo("downloadLivingReplay error", e.message);
  }
};
