import { type Icon, House, DoorOpen, UserPlus, ClipboardCheck, Notebook, LogIn, Cog } from '@lucide/svelte';

// A type for the title for each route
export type RouteNames =
    | "Home"
    | "Log In"
    | "Log Out"
    | "Sign Up"
    | "Task"
    | "Planner"
    | "Settings";

// A type for the path of each route
export type RoutePath = 
    | "/"
    | "/login"
    | "/logout"
    | "/signup"
    | "/task"
    | "/planner"
    | "/settings";
    
// An interface representing the metadata of the route
export interface RouteDetails {
    link: RoutePath, 
    icon: typeof Icon
};

// This is a list of routes with their names and metadata.
export const routes: Map<RouteNames, RouteDetails> = new Map();

routes.set("Home", { 
    link: "/", 
    icon: House, 
});
routes.set("Log In", { 
    link: "/login", 
    icon: LogIn,
});
routes.set("Log Out", { 
    link: "/logout", 
    icon: DoorOpen,
});
routes.set("Sign Up", { 
    link: "/signup", 
    icon: UserPlus,
});
routes.set("Task", { 
    link: "/task", 
    icon: ClipboardCheck,
});
routes.set("Planner", { 
    link: "/planner", 
    icon: Notebook,
});
routes.set("Settings", { 
    link: "/settings", 
    icon: Cog,
});