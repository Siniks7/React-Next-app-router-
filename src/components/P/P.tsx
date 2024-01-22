import { PProps } from './P.props';
import styles from './P.module.css';

export const P = ({ size = 'medium', children }: PProps): JSX.Element => {
	switch (size) {
	case 'small':
		return <p className={styles.small}>{children}</p>;
	case 'medium':
		return <p className={styles.medium}>{children}</p>;
	case 'large':
		return <p className={styles.large}>{children}</p>;
	default:
		return <></>;
	}
};