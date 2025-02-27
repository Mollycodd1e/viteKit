export interface IModalSuccess {
    isSuccessOpen: boolean
    setIsSuccess:  React.Dispatch<React.SetStateAction<boolean>>
    createPortalObj?: { domNode: HTMLElement | null; key?: string | null | undefined }
}