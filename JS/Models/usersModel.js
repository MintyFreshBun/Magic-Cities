/**
 * Classe que modela um utilizador
 */
export default class User {
    constructor(username, password, xp, level, userQuestionId,userLikes) {
        this.username = username
        this.password = password
        this.xp = xp
        this.level = level
        this.userQuestionId = userQuestionId
        this.userLikes = userLikes
    }
}