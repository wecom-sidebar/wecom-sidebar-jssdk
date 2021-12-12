import { WxInvokeCallbackRes } from "./common";

export type CreateSchoolPaymentParams = {
  projectName?: string; // 收款项目名称
  amount?: number; // 收款金额，每个学生需付费的金额，单位为分
  payers?: {
    students?: string[]; //需要收款的学生列表
    departments?: number[]; //需要收款的家校通讯录部门列表、支持班级，年级，校区
  };
};

export type CreateSchoolPaymentRes = WxInvokeCallbackRes & {
  paymentId: string;
};
