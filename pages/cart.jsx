import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from '../redux/cart.slice';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalPrice = () => {
    return cart.reduce(
      (accumulator, item) => accumulator + item.quantity * item.price,
      0
    );
  };

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Your Cart is Empty!</h1>
      ) : (
        <>
        <p className={styles.header}>Your cart :</p>
          {cart.map((item) => (
            <div className={styles.body}>
              <div className={styles.image}>
                <Image src={item.image}fill={true}/>
              </div>
              <div className={styles.flex}>
                <p className={styles.itemp}>{item.product}</p>
                <p className={styles.pricee}>{item.price} DT</p>
                <div className={styles.buttons}>
                  <button onClick={() => dispatch(incrementQuantity(item.id))}>
                    +
                  </button>
                  <p className={styles.quan}>{item.quantity}</p>
                  <button onClick={() => dispatch(decrementQuantity(item.id))}>
                    -
                  </button>
                </div>
                <p className={styles.pricee}>{item.quantity * item.price} DT</p>
            </div>
            </div>
          ))}
          <h2>Total: {getTotalPrice()} DT</h2>
          <button className={styles.cmnd}>Commander</button>
        </>
      )}
    </div>
  );
};

export default CartPage;
