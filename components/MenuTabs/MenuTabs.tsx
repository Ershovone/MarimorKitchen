import styles from '../../styles/MenuTabs.module.css';
import { ContentWrapper } from '../ContentWrapper';

const MenuTabs: React.FC = () => {
  return (
    <div className={styles.container}>
      <ContentWrapper>
        <div className={styles.menuItems}>
          <span className={styles.menuItem}>SMOOTHEI BOWL</span>
          <span className={styles.menuItem}>PORRIDGES</span>
          <span className={styles.menuItem}>BOWLS & SALADS</span>
          <span className={styles.menuItem}>SMOOTHIES</span>
          <span className={styles.menuItem}>COLD PRESS JUICES</span>
          <span className={styles.menuItem}>DRINKS</span>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default MenuTabs;
