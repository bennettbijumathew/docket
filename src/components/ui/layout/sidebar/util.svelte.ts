import { searchParams } from "sv-router";

export const SIDEBAR_KEY = 'sidebar';

/** This is an interface to access the sidebar's state and functions */
export const sidebar = {
    /** This function gets the value of the sidebar's search parameter value */
    get value(): string | null {
        const paramValue = searchParams.get(SIDEBAR_KEY) as string | null

        return paramValue
    },

    /** This function gets the sidebar's open state */
    get isOpen(): boolean {
        return searchParams.has(SIDEBAR_KEY) && searchParams.get(SIDEBAR_KEY) == true;
    },

    /** This function opens the sidebar through setting a search parameter */
    open(): void {
        searchParams.set(SIDEBAR_KEY, true);
    },

    /** This function closes the sidebar through removing a search parameter */
    close(): void {
        searchParams.delete(SIDEBAR_KEY);
    },

    /** This function toggles the sidebar to be open / closed */
    toggle(): void { 
        if (sidebar.isOpen == false) {
            sidebar.open();
        }
        else {
            sidebar.close();
        }
    }
};