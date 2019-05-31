/**
 * class model of a city
 */
export default class City {
    constructor(name, zone, date, upload, level, comments, faves,cover) {
        this.name = name
        this.zone = zone
        this.date = date
        this.upload = upload        
        this.level = level
        this.comments = comments
        this.faves = faves
        this.cover = cover
        
    }
    
    // Compare 2 cities. This is for the alphabetic order from A to Z
    static compare(cityA, cityB) {
        if (cityA.name < cityB.name)
            return -1;
        if (cityA.name > cityB.name)
            return 1;
        return 0;
    }
}