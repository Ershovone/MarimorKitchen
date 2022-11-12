import Image from 'next/image'
import styles from '../../styles/Header.module.css';
import { ContentWrapper } from '../ContentWrapper';

const Header: React.FC = () => {
  return (
    <div className={styles.container}>
      <ContentWrapper>
        <div className={styles.leftNavigation}>
          <span className={styles.section}>menu</span>
          <span className={styles.section}>raw</span>
          <span className={styles.section}>vegan</span>
          <span className={styles.section}>gluten free</span>
          <span className={styles.section}>sugar free</span>
        </div>
        <div className={styles.rightNavigation}>
          <span className={styles.lang}>tr</span>
          <span className={styles.lang}>en</span>
          <span className={styles.lang}>ru</span>
          <span className={styles.workshop}>workshop</span>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default Header;
