import { useState } from "react";
import reactLogo from "../assets/react.svg";
import { invoke } from "@tauri-apps/api/core";

function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    async function greet() {
        setGreetMsg(await invoke("greet", { name }));
    }

    return (
        <main>
            <h1>Welcome to Tauri + React</h1>

            <div className="p-10 bg-red-100">
                <a href="https://vitejs.dev" target="_blank">
                <img src="/vite.svg" alt="Vite logo" />
                </a>
                <a href="https://tauri.app" target="_blank">
                <img src="/tauri.svg" alt="Tauri logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                <img src={reactLogo} alt="React logo" />
                </a>
            </div>

            <p>Click on the Tauri, Vite, and React logos to learn more.</p>

            <form
                onSubmit={(e) => {
                e.preventDefault();
                greet();
                }}
            >
                <input
                    id="greet-input"
                    onChange={(e) => setName(e.currentTarget.value)}
                    placeholder="Enter a name..."
                />

                <button type="submit">Greet</button>
            </form>

            <p>{greetMsg}</p>
        </main>
    );
}

export default App;
