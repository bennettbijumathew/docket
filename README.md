<!-- CREDITS: -->
<!-- README.md is based of: https://github.com/othneildrew/Best-README-Template -->

<!-- PROJECT SHIELDS -->
<!-- You can get more badges from: https://github.com/inttter/md-badges -->
[windows-image]: https://custom-icon-badges.demolab.com/badge/Windows-0078D6?logo=windows11&logoColor=white

[android-image]: https://img.shields.io/badge/Android-32a852?logo=android&logoColor=white
[android-url]: https://firebase.google.com/

[website-image]: https://img.shields.io/badge/Website-9F2B68?logo=RSS&logoColor=fff
[website-url]: https://firebase.google.com/

[typescript-image]: https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff
[typescript-url]: https://firebase.google.com/

[rust-image]: https://img.shields.io/badge/Rust-%23000000.svg?e&logo=rust&logoColor=white
[rust-url]: https://rust-lang.org/

[svelte-image]: https://img.shields.io/badge/Svelte-%23f1413d.svg?logo=svelte&logoColor=white
[svelte-url]: https://svelte.dev/

[sv-router-image]: https://img.shields.io/badge/Sv--Router-%23f1413d.svg?logo=svelte&logoColor=white
[sv-router-url]: https://sv-router.vercel.app/

[tauri-image]: https://img.shields.io/badge/Tauri-24C8D8?logo=tauri&logoColor=fff
[tauri-url]: https://v2.tauri.app/

[firebase-auth-image]: https://img.shields.io/badge/Firebase%20Authentication-039BE5?logo=Firebase&logoColor=white
[firebase-auth-url]: https://firebase.google.com/docs/auth

[firestore-image]: https://img.shields.io/badge/Firestore-039BE5?logo=Firebase&logoColor=white
[firestore-url]: https://firebase.google.com/docs/firestore

<!-- PROJECT HEADER -->
# Docket.
Docket is a task management application created by Bennett Biju Mathew that reimagines how tasks are organized. Instead of restricting tasks to a single planner or category, Docket allows tasks to exist across multiple planners, making it easier to represent relationships between different projects, goals, and workflows.

This project was built to explore the Svelte framework while further developing my front-end development skills. At the same time, it addresses a common limitation of traditional task management applications: tasks are often confined to a single group, making it difficult to capture how they relate to multiple contexts. By enabling tasks to belong to multiple planners, Docket provides a more flexible and connected approach to task organization.

Image of the Task List View 
<img width="1920" height="911" alt="Task List View of the Docket Application" src="https://github.com/user-attachments/assets/fd993cdc-e217-4927-b90e-ae9130267620" />


Image of the Planner List View 
<img width="1920" height="911" alt="Planner List View of the Docket Application" src="https://github.com/user-attachments/assets/2bbec5fe-19dc-4500-af58-465bdb9f80b8" />

## About The Project
This project is a multi platform application that is powered by Tauri. The frontend for the application uses Svelte and sv-router to provide a fast and smooth user experience. This is connected with Firebase where authentication and data storage is handled. 

Using these components, the application helps to manage tasks with two core entities:
- Planner: A tag that is used to group tasks into different groups.
- Task: An actionable item that belongs to a group of planners. It includes attributes such as due date and title. 

With this multi-planner approach, it helps the user to group tasks into multiple domains. This could be useful in use cases such as a tasks like 'Buy groceries' belonging to both 'Home' and 'Errands' planners. 

This allows users to filter tasks dynamically by toggling planners, making it easy to view tasks relevant to a specific context—such as everything that needs to be done at home or while running errands.

### Features
- Authenticate users and have data for each user.
- Ability to create, read, edit, and delete planners and tasks.
- View tasks based on the toggled planners that are related to the task's selected planners
- Filter and search through a list of planners and tasks
- Provide update alerts for new releases within the Windows application.
- Alert users based on upcoming due tasks.
- Handle mass actions such as deleting multiple tasks or planners.

### Avaliable Platforms
![Windows][windows-image]
![Android][android-image]
![Website][website-image]

### Built With: 
[![TypeScript][typescript-image]][typescript-url]
[![Rust][rust-image]][rust-url]
[![Svelte][svelte-image]][svelte-url]
[![Sv-Router][sv-router-image]][sv-router-url]
[![Tauri][tauri-image]][tauri-url]
[![Firebase Authentication][firebase-auth-image]][firebase-auth-url]
[![Firestore][firestore-image]][firestore-url]

<!-- GETTING STARTED -->
## Downloading the application
For the Windows and Android platform, the application can be downloaded through the [Releases](https://github.com/bennettbijumathew/docket-todo/releases/latest) of this repository.

<!-- ROADMAP -->
## Roadmap
This is a list of upcoming changes that may be planned for the future of the application. This may be bound to change in the future.
- [x] Add Notifications for Android and Windows. 
- [x] Refactor code to promote readability and clearer responsibilities,
- [x] Sorting and filtering for the Task and Planner View
- [x] Implement mass actions (such as delete or completing tasks) for the Task View
- [ ] Update the application's aesthetic
- [ ] Creating a new calendar view
- [ ] Offline Support

<!-- CONTACT -->
## Contact

Bennett Biju Mathew - [LinkedIn](https://www.linkedin.com/in/bennettbijumathew/),  [Github](https://github.com/bennettbijumathew/docket-todo/)
