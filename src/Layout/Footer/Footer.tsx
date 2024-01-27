import { FooterProps } from './Footer.props';
import styles from './Footer.module.css';
import cn from 'classnames';
import Link from 'next/link';
import { format } from 'date-fns';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<div className={styles.info}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
			<div className={styles.links}>
				<Link href="/" target='blank'>Пользовательское соглашение</Link>
				<Link href="/" target='blank'>Политика конфиденциальности</Link>
			</div>
		</footer>
	);
};