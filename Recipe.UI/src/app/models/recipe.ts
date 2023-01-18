import { Ingredients } from './ingredients';
import { Instructions } from './instructions';
export class Recipe{
    id?: number;
    name: string = "";
    description: string  = "";
    notes?: string =  "";
    image?: string  = "";
    ingredients?: Ingredients[] = [];
    instructions?: Instructions[] = [];
}