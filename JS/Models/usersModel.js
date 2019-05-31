/**
 * Classe que modela um utilizador
 */
export default class User {
    constructor(username, password, xp, level) {
        this.username = username
        this.password = password
        this.xp = 0
        this.level = 0
    }
}