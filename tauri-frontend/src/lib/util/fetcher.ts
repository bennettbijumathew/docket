import { authState } from "@/stores/auth/state.svelte.ts"

export async function fetcher<Type>( url: string ): Promise<{ data: Type | null; error: string | null; }> {
    let responseData: Type | null = null

    if (!authState.ready) {
        await new Promise<void>((resolve) => {
            const unsub = $effect(() => {
                if (authState.ready) {
                    unsub
                    resolve()
                }
            })
        })
    }

    const token = await authState.user?.getIdToken()
    const apiLink = `http://${import.meta.env.VITE_API_LINK}:${import.meta.env.VITE_API_PORT}/${url}`
    
    const response = await fetch(apiLink, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${await token}`
        }
    })

    responseData = await response.json() as Type

    return {
        data: responseData,
        error: null
    }
}