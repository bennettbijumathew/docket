<script lang="ts">
    import { sendPasswordResetEmail } from "firebase/auth";
    import { auth } from "@/lib/config/firebase.ts";

    let email: string = $state("tekkit25637@gmail.com");

    let sentEmailStatus: boolean = $state(false);
    let error: string = $state("")

    function sendResetEmail() {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            sentEmailStatus = true
        })
        .catch((error) => {
            sentEmailStatus = true
            error = error.message;
        });

    }
</script>

<main class="p-4">
    <h1 class="font-bold text-lg pb-4"> reset your password </h1>

    <section>
        <div class="pb-4">
            <p>email</p>
            <input type="text" bind:value={email} class="border-b" placeholder="enter your email"/>
        </div>
        
        <div class="pb-4">
            {#if sentEmailStatus === false}
                <button class="border p-1" onclick={sendResetEmail}>send email</button>
            {/if}
        </div>

        <div class="pb-4">
            {#if error === ""}
                <p> {error} </p>
            {/if}

            {#if sentEmailStatus === true}
                <p class="pb-4"> The email has been sent! </p>
                <a class="border p-1" href="/login">go to login</a>
            {/if}
        </div>
    </section>
</main>