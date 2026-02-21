import { PropsWithChildren } from 'react';

export const Card = ({ children }: PropsWithChildren) => <article className="card p-3 mb-3">{children}</article>;
