/**
 * Classe que modela um utilizador
 */
export default class User {
    constructor(username, password, xp, level, maxLvl) {
        this.username = username
        this.password = password
        this.xp = xp
        this.level = level
        this.maxLvl =maxLvl
    }
}