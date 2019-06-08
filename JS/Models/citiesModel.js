/**
 * class model of a city
 */
export default class City {
    constructor(name, zone, date, upload, level, comments, faves,cover,brasao,link,desc) {
        this.name = name
        this.zone = zone
        this.date = date
        this.upload = upload        
        this.level = level
        this.comments = comments
        this.faves = faves
        this.cover = cover
        this.brasao = brasao
        this.link = link
        this.desc = desc
        
        
    }
    
    // Compare 2 cities. This is for the alphabetic order from A to Z
    static compareAZ(cityA, cityB) {
        if (cityA.name < cityB.name)
            return -1;
        if (cityA.name > cityB.name)
            return 1;
        return 0;
    }

    // Compare 2 cities. This is for the alphabetic order from Z to A
    static compareZA(cityA, cityB) {
        if (cityA.name > cityB.name)
            return -1;
        if (cityA.name < cityB.name)
            return 1;
        return 0;
    }
}