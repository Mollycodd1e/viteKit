import React, {FC, useEffect,} from 'react'
import s from './Modal.module.scss'
import {createPortal} from "react-dom";

interface IModalProps {
    isOpen: boolean
    emitIsOpen: ( () => boolean) | (() => void)
    additionalClass?: string
    additionalClassOverlay?: string
    additionalClassModalBody?: string
    children?: React.ReactNode
    isTransparentBack?: boolean
    isClickOutside?: boolean
    createPortalObj?: { domNode: HTMLElement | null, key?: string | null | undefined }
}

export const Modal: FC<IModalProps> = ({
                                           isOpen = false,
                                           emitIsOpen,
                                           isTransparentBack,
                                           isClickOutside = true,
                                           createPortalObj,
                                           additionalClass,
                                           additionalClassOverlay,
                                           additionalClassModalBody,
                                           children,
                                       }) => {

    const closeModal = () => {
        if (isClickOutside) emitIsOpen()
    }

    useEffect(() => {
        const enable = () => {
            document.body.classList.toggle('disable-scroll')
        }

        const disable = () => {
            document.body.classList.remove('disable-scroll')
        }

        if (isOpen) {
            enable()
            return disable
        }
    }, [isOpen])

    const ModalComponent = ({children}: { children: React.ReactNode }) => {
        return <div className={`${s.root} ${additionalClass}`}>
            <div
                onClick={closeModal}
                className={`${s.modalOverlay} ${additionalClassOverlay} ${isTransparentBack ? s.isTransparentBack : ''}`}
            />

            <div className={`${s.modalBody} ${additionalClassModalBody}`}>
                {children}
            </div>
        </div>
    }


    if (createPortalObj?.domNode && isOpen) return (
        <>{createPortal(
            <ModalComponent>{children}</ModalComponent>,
            createPortalObj.domNode,
            createPortalObj.key ? createPortalObj.key : undefined
        )}
        </>
    )

    else if (isOpen) return (
        <ModalComponent>{children}</ModalComponent>
    )

    else return <></>
}

