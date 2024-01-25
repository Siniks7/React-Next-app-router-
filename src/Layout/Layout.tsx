import { LayoutProps } from './Layout.props';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './Layout.module.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import cn from 'classnames';
import { Header } from './Header/Header';
import React, { FunctionComponent } from 'react';
import { Sidebar } from './SideBar/SideBar';
import { Footer } from './Footer/Footer';

const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div>
					{children}
				</div>
			</div>
			<Footer />
		</>
	);
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function withLayoutComponent(props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		);
	};
};