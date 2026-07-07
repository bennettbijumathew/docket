import { User } from "firebase/auth";
import { AuthStatus } from "@/lib/auth/type";

export class AuthStore {
    public error: string = $state("");
    #authStatus: AuthStatus = $state("unauthenticated");
    #user: User | null = $state(null); 

    get status() {
        return this.#authStatus;
    }

    set status(newStatus: AuthStatus) {
        this.#authStatus = newStatus;
    }

    get userId() {
        if (this.#user === null) {
            return "";
        }

        return this.#user.uid;
    }

    get user(): {id: string, email: string} | null {
        if (this.#user === null) {
            return null;
        }
        
        return { 
            id: this.#user.uid,
            email: this.#user.email ?? ""
        };
    }

    set user(newUser: User | null) {
        this.#user = newUser;
    }
}

export const authentication = new AuthStore();