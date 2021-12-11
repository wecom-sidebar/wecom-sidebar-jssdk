import React, {FC, useState} from 'react'
import {Input, Modal} from "antd";
import {
  chooseImage,
  downloadImage,
  downloadVoice,
  getLocalImgData,
  onVoicePlayEnd,
  onVoiceRecordEnd,
  pauseVoice,
  playVoice,
  previewFile,
  previewImage,
  startRecord,
  stopRecord,
  stopVoice,
  translateVoice,
  uploadImage,
  uploadVoice
} from "./apis";
import ItemButton from "../Item/ItemButton";

const Media: FC = () => {
  const [modalConfig, setModalConfig] = useState({
    visible: false,
    localId: '',
    serverId: '',
    type: '',
  });

  return (
    <div>
      <ul>
        <ItemButton onClick={() => setModalConfig({...modalConfig, type: 'getImage', visible: true})}>
          wx.getLocalImgData
        </ItemButton>
        <ItemButton onClick={chooseImage}>wx.chooseImage</ItemButton>
        <ItemButton onClick={previewImage}>wx.previewImage</ItemButton>
        <ItemButton onClick={() => setModalConfig({...modalConfig, type: 'uploadImage', visible: true})}>
          wx.uploadImage
        </ItemButton>
        <ItemButton onClick={() => setModalConfig({...modalConfig, type: 'downloadImage', visible: true})}>
          wx.downloadImage
        </ItemButton>
        <ItemButton onClick={startRecord}>wx.startRecord</ItemButton>
        <ItemButton onClick={stopRecord}>wx.stopRecord</ItemButton>
        <ItemButton onClick={() => setModalConfig({...modalConfig, type: 'playVoice', visible: true})}>
          wx.playVoice
        </ItemButton>
        <ItemButton onClick={() => setModalConfig({...modalConfig, type: 'stopVoice', visible: true})}>
          wx.stopVoice
        </ItemButton>
        <ItemButton onClick={() => setModalConfig({...modalConfig, type: 'pauseVoice', visible: true})}>
          wx.pauseVoice
        </ItemButton>
        <ItemButton onClick={onVoiceRecordEnd}>wx.onVoiceRecordEnd</ItemButton>
        <ItemButton onClick={onVoicePlayEnd}>wx.onVoicePlayEnd</ItemButton>
        <ItemButton onClick={() => setModalConfig({...modalConfig, type: 'uploadVoice', visible: true})}>
          wx.uploadVoice
        </ItemButton>
        <ItemButton onClick={() => setModalConfig({...modalConfig, type: 'downloadVoice', visible: true})}>
          wx.downloadVoice
        </ItemButton>
        <ItemButton onClick={() => setModalConfig({...modalConfig, type: 'translateVoice', visible: true})}>
          wx.translateVoice
        </ItemButton>
        <ItemButton type="primary" block onClick={previewFile}>
          wx.previewFile
        </ItemButton>
      </ul>

      <Modal
        visible={modalConfig.visible}
        title="图像"
        onCancel={() => setModalConfig({...modalConfig, visible: false})}
        onOk={() => {
          switch (modalConfig.type) {
            case 'uploadImage':
              return uploadImage(modalConfig.localId);
            case 'downloadImage':
              return downloadImage(modalConfig.serverId);
            case 'getImage':
              return getLocalImgData(modalConfig.localId);
            case 'playVoice':
              return playVoice(modalConfig.localId);
            case 'stopVoice':
              return stopVoice(modalConfig.localId);
            case 'pauseVoice':
              return pauseVoice(modalConfig.localId);
            case 'uploadVoice':
              return uploadVoice(modalConfig.localId);
            case 'downloadVoice':
              return downloadVoice(modalConfig.serverId);
            case 'translateVoice':
              return translateVoice(modalConfig.localId);
          }
        }}
      >
        <Input
          placeholder="输入图片 localId"
          value={modalConfig.localId}
          onChange={e => setModalConfig({...modalConfig, localId: e.target.value})}
        />
        <Input
          placeholder="输入图片 serverId"
          value={modalConfig.serverId}
          onChange={e => setModalConfig({...modalConfig, serverId: e.target.value})}
        />
      </Modal>
    </div>
  )
}

export default Media
