import { Cat } from "src/app/models/cat-fact.model";

export interface CatState {
    cats: Cat[];
    error : any;
    isLoading: boolean;
}
