import { onAuthStateChanged } from "firebase/auth"
import { auth } from "@/lib/config/firebase.ts"
import type { User } from "firebase/auth";

class AuthState {
    loading = $state<boolean>(true)
    user = $state<User | null>()
    ready = $state<boolean>(false)

    constructor() {
        onAuthStateChanged(auth, async (user) => {  
            this.loading = true;
            this.ready = false;
            
            await auth.authStateReady().then(() => {                
                if (user) {
                    this.ready = true;
                    this.user = user
                    this.loading = false;
                }

                else {
                    this.ready = false
                    this.user = null
                    this.loading = false;
                }
            })
        })
    }   
}

export const authState = new AuthState();