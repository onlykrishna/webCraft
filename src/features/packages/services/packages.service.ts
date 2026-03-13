import { COLLECTIONS } from '@/firebase/collections';
import { readCollection } from '@/firebase/firestore';
import { PricingPackage } from '@/features/packages/types/package.types';

export const getPackages = () => readCollection<PricingPackage>(COLLECTIONS.packages);