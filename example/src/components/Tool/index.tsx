import React, {FC, useState} from "react";
import {Input, Modal} from "antd";
import {downloadLivingReplay, replayLiving, startLiving, startMeeting} from "./apis";
import ItemButton from "../Item/ItemButton";

const Tool: FC = () => {
  const [modalConfig, setModalConfig] = useState({
    livingId: '',
    visible: false,
    type: 'replay',
  })

  return (
    <div>
      <ul>
        <ItemButton onClick={startMeeting}>wx.invoke('startMeeting')</ItemButton>
        <ItemButton onClick={startLiving}>wx.invoke('startLiving')</ItemButton>
        <ItemButton onClick={() => setModalConfig({...modalConfig, type: 'replay', visible: true})}>
          wx.invoke('replayLiving')
        </ItemButton>
        <ItemButton onClick={() => setModalConfig({...modalConfig, type: 'download', visible: true})}>
          wx.invoke('downloadLivingReplay')
        </ItemButton>
      </ul>

      <Modal
        visible={modalConfig.visible}
        title="直播 livingId"
        onOk={() => {
          if (modalConfig.type === 'replay') {
            return replayLiving(modalConfig.livingId);
          } else {
            return downloadLivingReplay(modalConfig.livingId);
          }
        }}
        onCancel={() => setModalConfig({...modalConfig, visible: false})}
      >
        <Input
          placeholder="输入直播 livingId"
          value={modalConfig.livingId}
          onChange={e => setModalConfig({...modalConfig, livingId: e.target.value})}
        />
      </Modal>
    </div>
  )
}

export default Tool
