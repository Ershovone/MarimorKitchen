import styles from '../../styles/ProductCard.module.css';

const ProductCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.title}>THE NAME OF THIS GÜZEL
          TAMAM TAMAM
        </div>
        <div className={styles.ingredients}>
          full description of this magical yiy
          tamam içindikeler
        </div>
        <div className={styles.price}>
          1000 tl
        </div>
      </div>
    </div>
  )
}

export default ProductCard;
