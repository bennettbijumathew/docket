<script lang="ts">
    import { signInWithEmailAndPassword, signOut } from "firebase/auth";
    import { auth } from "@/lib/config/firebase.ts";
    import { authState } from "@/stores/auth/state.svelte.ts";
	import { navigate } from "sv-router/generated";

    let email: string = $state("tekkithuan@gmail.com");
    let password: string = $state("Testing123!");

    function handleLogIn() {
        signInWithEmailAndPassword(auth, email, password);
        navigate("/auth-example");
    }

    function handleLogOut() {
        signOut(auth);
    }
</script>

<main class="p-4">
    <h1 class="font-bold text-lg pb-4"> login </h1>

    <section>
        <div class="pb-4">
            <p>email</p>
            <input type="text" bind:value={email} class="border-b" placeholder="enter your email"/>
        </div>
    
        <div class="pb-4">
            <p>password</p>
            <input type="text" bind:value={password} class="border-b" placeholder="enter your password"/>
        </div>
    
        <div class="pb-4">
            <button class="border p-1" onclick={handleLogIn}>log in</button>
            <button class="border p-1" onclick={handleLogOut}>signout</button>
            <a class="border p-1" href="/reset-password">forgot</a>
        </div>
    </section>

    <section>
        <p> Loading: {authState.loading.toString()} </p>
        <p> User: {authState.user?.toString()} </p>
        <p> Ready: {authState.ready.toString()} </p>
    </section>
</main>