import { createContext, Dispatch, Reducer } from "react";
import { mergeInto } from "../utils/objects";
import { DeepPartial } from "../types";

interface SelectedObjectData {
    n: number;
    epoch: number;
    full_name: any;
    spkid: number;
    diameter: number;
    H: number;
    albedo: number;
    rot_per: number;
    a: number;
    e: number;
    i: number;
    om: number;
    w: number;
    q: number;
    ad: number;
    per_y: number;
    data_arc: number;
    n_obs_used: number;
    epoch_mjd: number;
    ma: number;

    "Mission Type": string;
    "Mission Arrival": string;
    "Mission Name": string;
    "Mission Launch": string;
    Status: string;
}

export interface Store {
    controls: {
        timeSpeed: number;
        isPaused: boolean;
    };
    view: "Planets" | "NECs" | "NEAs" | "PHAs";
    currentDate: Date;
    start: boolean;
    showOrbits: boolean;
    selectedObjectData: SelectedObjectData | null;
    gridConfig: {
        gridLength: number | null;
        gridSpacing: number | null;
    };
    neoSelected: string | null;
    showLabels: boolean;
    radialLines: boolean;
    selectedPlanet: string | null;
    allFilteredNames: string[];
    seeAllObjects: boolean;
    favoriteData: any[];
}

export type StoreReducerArgument =
    | DeepPartial<Store>
    | ((store: Store) => DeepPartial<Store>);

export const storeReducer: Reducer<Store, StoreReducerArgument> = (
    state,
    changes,
) => {
    if (typeof changes === "function") changes = changes(state);

    const newState = structuredClone(state);
    mergeInto(newState, changes);
    return newState;
};

export const defaultStore = (): Store => ({
    controls: {
        timeSpeed: 1,
        isPaused: true,
    },
    view: "Planets",
    showLabels: false,
    gridConfig: {
        gridLength: null,
        gridSpacing: null,
    },
    selectedPlanet: null,
    neoSelected: null,
    showOrbits: false,
    radialLines: false,
    selectedObjectData: null,
    seeAllObjects: false,
    currentDate: new Date(),
    allFilteredNames: [],
    start: false,
    favoriteData: [],
});

const GlobalStore = createContext<[Store, Dispatch<StoreReducerArgument>]>([
    defaultStore(),
    () => { },
]);

export default GlobalStore;
