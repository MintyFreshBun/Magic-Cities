export default class Question {
    constructor(
        id,
        level,
        narrative,
        description,
        responses,
        correctResponse,
        points
    ) {
        this.id = id
        this.level = level
        this.narrative = narrative
        this.description = description
        this.responses = responses
        this.correctResponse = correctResponse
        this.points = points
    }
}