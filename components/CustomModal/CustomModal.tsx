import styles from '../../styles/CustomModal.module.css';
import Modal from 'react-modal';

type Props = {
  isOpen: boolean;
  children: React.ReactNode;
}

const CustomModal: React.FC<Props> = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      style={{
        content: {
          margin: 'auto',
          width: '80%',
        }
      }}
      >
      {props.children}
    </Modal>
  )
}

export default CustomModal;
