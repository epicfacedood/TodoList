class Project{
    constructor(title, todoList){
        this.title = title;
        this.todoList = todoList; //This should be an array of Todo Objects
    }
    sayName = () => {
        console.log(this.title);
    }
}

function showProjectForm () {

    document.addEventListener("DOMContentLoaded", () => {
        const addProjectButton = document.querySelector("#addProject");
        const confirmButton = document.querySelector("#confirmbutton");
        const closeButton = document.querySelector('#closebutton');
        const dialog = document.querySelector("dialog");
        const projectNameInput = document.querySelector("#projectName");
    
        const getUserInput = () => projectNameInput.value;
    
        const clearUserInput = () => {
            document.querySelector("#projectName").value = "";
        };

        const toggleDialogDisplay = () => {
            dialog.classList.toggle("centered-dialog");
        }
    
        const closeDialog = () => {
            dialog.close();
            toggleDialogDisplay();
        };
        
        const showDialog = () => {
            dialog.showModal();
            toggleDialogDisplay();
        };
    
        const createProjectElement = (projectName) => {
            const addedProject = document.createElement("li");
            addedProject.classList.add("sideBarProject");
            addedProject.textContent = projectName;
            addedProject.addEventListener("click", () => changeProjectScreen(projectName));
            return addedProject;
        };
    
        const addProjectToList = (projectElement) => {
            const projectList = document.querySelector("#projectList");
            projectList.appendChild(projectElement);
        };
    
        const addProject = () => {
            const userInput = getUserInput();
            const projectElement = createProjectElement(userInput);
            const newProject = new Project(userInput, []);
            addProjectToList(projectElement);
            clearUserInput();
            closeDialog();
        };

        const changeProjectScreen = (projectName) => {
            const projectScreen = document.querySelector("#mainscreen");
            const projectTitle = document.querySelector('#projectTitle');
            if (projectTitle) {
                projectTitle.textContent = projectName;
            } else {
                console.error("Element with ID 'projectTitle' not found.");
            }
        }
    
        confirmButton.addEventListener("click", addProject);
        addProjectButton.addEventListener("click", showDialog);
        closeButton.addEventListener("click", closeDialog);
        projectNameInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                addProject();
            }
        });
    });
};





export { showProjectForm };