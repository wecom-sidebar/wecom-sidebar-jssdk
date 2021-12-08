interface Response {
  errcode: number; // 错误码
  errmsg: string; // 错误信息
}

interface UserResponse extends Response {
  userid: string; // 成员UserID
  name: string; // 成员名称
  gender: 0 | 1 | 2; // 性别。0表示未定义，1表示男性，2表示女性
  qr_code: string; // 员工个人二维码，扫描可添加为外部联系人
  thumb_avatar: string; // 头像缩略图url
}

interface ExternalUserResponse extends Response {
  external_contact: {
    external_userid: string // 外部联系人 Id
    name: string // 名字
    avatar: string // 头像
    corp_name: string // 公司名
    corp_full_name: string // 公司全名
    type: 1 | 2, // 外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户
    gender: 0 | 1 | 2 // 性别。0表示未定义，1表示男性，2表示女性
  }
}

interface FetchKfListResponse extends Response {
  account_list: {
    open_kfid: string; // id
    name: string; // 名称
    avatar: string; // 头像
  }[];
}

interface AuthResponse extends Response {
  UserId: string // 自己 userId
  DeviceId: string
}

interface TicketRes {
  meta: {
    nonceStr: string,
    timestamp: number,
    url: string,
  },
  app: {
    ticket: string,
    expires: number,
    signature: string,
  },
  corp: {
    ticket: string,
    expires: number,
    signature: string,
  },
}

interface Member {
  userid: string // 成员 userId
  type: 1 | 2 // 外部联系人的类型，1表示该外部联系人是微信用户，2表示该外部联系人是企业微信用户
  join_time: number // 加群时间
  join_scene: 1 | 2 | 3 // 怎么加群的
}

interface ExternalChatResponse extends Response {
  group_chat: {
    chat_id: string // 群 Id
    name: string // 群名
    owner: string // 群主 userId
    create_time: number // 创建时间
    notice: string // 公告
    member_list: Member[] // 成员列表
  }
}
