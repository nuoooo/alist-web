import { Portal } from "solid-js/web"
import { Center } from "./Center"
import { Right } from "./Right"
import { Copy, Move } from "./CopyMove"
import { Delete } from "./Delete"
import { Rename } from "./Rename"
import { NewFile } from "./NewFile"
import { Mkdir } from "./Mkdir"
import { PackageDownloadModal } from "./Download"
import { lazy } from "solid-js"
import { ModalWrapper } from "./ModalWrapper"
const Upload = lazy(() => import("../uploads/Upload"))

export const Modal = () => {
  return (
    <>
      <Copy />
      <Move />
      <Rename />
      <Delete />
      <NewFile />
      <Mkdir />
      <PackageDownloadModal />
      <ModalWrapper name="upload" title="home.toolbar.upload">
        <Upload />
      </ModalWrapper>

    </>
  )
}

export const Toolbar = () => {
  return (
    <Portal>
      <Right />
      <Center />
      <Modal />
    </Portal>
  )
}
