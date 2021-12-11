import { invoke } from "wecom-sidebar-jssdk";
import { getUserId, logInfo } from "../../utils";

export const createSchoolPayment = async () => {
  try {
    const userId = (await getUserId()) || "";
    const res = await invoke("createSchoolPayment", {
      projectName: "1班班费", //收款项目名称
      amount: 100, //收款金额，每个学生需付费的金额，单位为分
      payers: {
        students: [userId], //需要收款的学生列表
      },
    });
    logInfo("createSchoolPayment", JSON.stringify(res));
  } catch (e: any) {
    logInfo("createSchoolPayment error", e.message);
  }
};
