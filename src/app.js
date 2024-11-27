export default class App {
    constructor() {
        this.state = {
            currentPage: "createQuestionnare"
        }
        this.appElement = document.getElementById("app")
    }

    render() {
        if (this.state.currentPage === "createQuestionnare") {
            this.appElement.innerHTML = "<h1>Hello createQuestionnare<h1/>"
        }
    }
}