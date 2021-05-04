import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.setTitle("Settings")
    }
    async getHtml() {
        return `
            <h1>Settings</h1>
            <p>
                Change some settings
            </p>
        `;
    }
}