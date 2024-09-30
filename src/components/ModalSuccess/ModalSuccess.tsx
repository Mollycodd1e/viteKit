import {Modal} from "../Modal";
import {IModalSuccess} from "./ModalSuccess.types.ts";
import s from "./styles.module.scss";
import {Button} from "../Button";
import {NewIcon} from "../NewIcon";


export const ModalSuccess = ({isSuccessOpen, setIsSuccess}: IModalSuccess) => {
    return <Modal emitIsOpen={setIsSuccess} isOpen={isSuccessOpen} additionalClassModalBody={s.modalBody}
                  additionalClass={s.modal}
                  opacity={0.7}
                  isTransparentBack={true}>
        <div className={s.root}>
            <div className={s.check}>
                <NewIcon name={'circle'} size={'80'} additionalClass={s.iconCircle} color='#57C27D'/>
                <NewIcon
                    additionalClass={s.iconCheck}
                    size='32'
                    name={'check'}
                    color='#57C27D'
                />
            </div>

            <div className={s.text}>
                <div className={s.successTitle}>Запрос принят</div>
                <div className={s.successText}>Наш менеджер свяжется с вами в ближайшее время</div>
            </div>

            <Button
                data-testid="modal_submit"
                variant="blue"
                width="auto"
                type="submit"
                size="large"
                as="button"
                onClick={() => setIsSuccess(false)}
                additionalClass={s.modalBtn}>
                Хорошо
            </Button>
        </div>
    </Modal>
}