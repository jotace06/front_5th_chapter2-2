import { atom } from "jotai";

import { Product } from "../../../6_shared/types/domain";
import { initialProducts } from "./constants";

export const productsAtom = atom<Product[]>(initialProducts);
