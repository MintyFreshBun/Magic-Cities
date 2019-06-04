export default class Question {
    constructor(
        id,
        level,
        narration,
        description,
        responses,
        correctResponse,
        points
    ) {
        this.id = id
        this.level = level
        this.narration = narration
        this.description = description
        this.responses = responses
        this.correctResponse = correctResponse
        this.points = points
    }
}