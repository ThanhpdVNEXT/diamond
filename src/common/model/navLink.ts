import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { ParsedUrlQueryInput } from "querystring";

export type NavLink = {
    name: string;
    path: string;
    query?: string | null | ParsedUrlQueryInput;
    icon: string | IconDefinition;
    as?: string
}