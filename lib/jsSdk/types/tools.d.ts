type StartMeetingParams = {
  meetingType?: 1, // 会议类型。0-语音会议；1-视频会议
  theme?: string, // 会议主题。最多20个UTF-8字符
  attendees?: string[], // 参会人员，内部同事列表。系统会忽略不合法的ID
  externalAttendees?: string[], // 参会人员，外部联系列表。要求与发起人必须是好友关系。系统会忽略不合法的ID
  deviceSns?: string[], // 设备序列号列表。支持添加已绑定的硬件设备。Mac端不支持
  meetingId?: string
}

type StartMeetingRes = {
  meetingId: string
}

type StartLivingParams = {
  livingId?: string; // 直播 Id
  liveType?: 0 | 1 | 2 | 3; // 直播类型，0-通用直播；1-企业培训；2-大班课；3-小班课。 Mac端只支持通用直播
  theme?: string; // 直播主题。最多20个UTF-8字符
}

type StartLivingRes = {
  livingId: string;
}

type ReplayLivingParams = {
  livingId: string; // 直播 Id
}

type DownloadLivingReplayParams = ReplayLivingParams;
