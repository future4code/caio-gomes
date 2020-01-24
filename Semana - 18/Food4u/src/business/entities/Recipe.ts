export class Recipe {
    constructor(
        private title: string,
        private description: string,
        private userId: string,
        private creationdate: Date = new Date()
    ) {}

    getTitle() {
        return this.title
    }

    getDescription() {
        return this.description
    }

    getUserId() {
        return this.userId
    }

    getCreationDate() {
        return this.creationdate
    }
}
