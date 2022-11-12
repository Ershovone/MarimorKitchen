import styles from '../../styles/MenuTabs.module.css';
import { ContentWrapper } from '../ContentWrapper';

const MenuTabs: React.FC = () => {
  return (
    <div className={styles.container}>
      <ContentWrapper>
        <div className={styles.menuItems}>
          <span className={styles.menuItem}>SMOOTHIE</span>
          <span className={styles.menuItem}>SMOOTHIE</span>
          <span className={styles.menuItem}>SMOOTHIE</span>
          <span className={styles.menuItem}>SMOOTHIE</span>
          <span className={styles.menuItem}>SMOOTHIE</span>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default MenuTabs;
