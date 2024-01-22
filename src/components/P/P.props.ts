import { ReactNode } from 'react';

export interface PProps {
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
}