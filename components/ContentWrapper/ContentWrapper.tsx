import styles from '../../styles/ContentWrapper.module.css';

type Props = {
  children: React.ReactNode;
}

const ContentWrapper: React.FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}

export default ContentWrapper;
