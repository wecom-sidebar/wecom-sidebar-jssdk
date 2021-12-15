import axios from "axios";
import { SignRes } from "wecom-sidebar-jssdk";

// 后端地址
const baseURL = "https://backend.com";

// 创建 axios 实例
const api = axios.create({
  baseURL,
  proxy: false,
});

// 根据 userId 获取 user 信息
export const fetchUser = async (userId: string) => {
  const response = await api.get<UserResponse>("/api/qywx-proxy/user/get", {
    params: {
      userid: userId,
    },
  });

  return response.data;
};

// 根据 externalUserId 获取 externalUser 信息
export const fetchExternalUser = async (
  externalUserId: string,
  cursor?: string
) => {
  const response = await api.get<ExternalUserResponse>(
    "/api/qywx-proxy/externalcontact/get",
    {
      params: {
        external_userid: externalUserId,
        cursor,
      },
    }
  );

  return response.data.external_contact;
};

// 获取客服列表
export const fetchKfList = async () => {
  const response = await api.get<FetchKfListResponse>(
    "/api/qywx-proxy/kf/account/list"
  );

  return response.data.account_list;
};

// 根据 externalChatId 获取 chat 信息
export const fetchExternalChat = async (externalChatId: string) => {
  const response = await api.get<ExternalChatResponse>(
    "/api/qywx-proxy/externalcontact/groupchat/get",
    {
      params: {
        chat_id: externalChatId,
        need_name: 1,
      },
    }
  );

  return response.data.group_chat;
};

// 根据 code 换取 userId，作为用户身份验证
export const fetchUserId = async (code: string) => {
  const response = await api.get<AuthResponse>(
    "/api/qywx-proxy/user/getuserinfo",
    {
      params: {
        code,
      },
    }
  );

  return response.data.UserId;
};

// 获取签名
export const fetchSignatures = async () => {
  const response = await api.get<SignRes>("/api/qywx-utils/signatures", {
    params: {
      url: window.location.href,
    },
  });

  return response.data;
};

export default api;
