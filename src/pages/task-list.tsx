import { PlusIcon } from '@heroicons/react/24/solid'

function TaskList() {
    return (
        <main className="flex h-screen p-5 gap-x-5 bg-zinc-900">
            <section className="flex flex-col flex-1 gap-y-5">
                <div className="h-32 p-5 border border-zinc-700">
                    <h1> DOCKET. </h1>
                </div>

                <div className="flex-1 p-5 border border-zinc-700">

                </div>
            </section>

            <section className="flex flex-col justify-between flex-3 p-5 border border-zinc-700">
                <div>
                    <h2> Task List </h2>
                </div>
                
                <div className="flex gap-x-5"> 
                    <input 
                        className="flex-1 h-11 px-4 bg-teal-200 active:bg-teal-400 focus:bg-teal-300 focus:outline-none rounded-sm hover:rounded-3xl focus:rounded-3xl transition-all duration-200"
                        placeholder="Add a new task."
                    />

                    <button className="size-11 bg-rose-400 active:bg-rose-500 hover:bg-rose-500 focus:outline-none rounded-sm hover:rounded-3xl focus:rounded-3xl transition-all duration-200"> 
                        <PlusIcon className="size-6 text-zinc-950 justify-self-center"> </PlusIcon>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default TaskList;
