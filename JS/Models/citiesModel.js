/**
 * class model of a city
 */
export default class city {
    constructor(name, zone, date, upload, videos, photos, level, comments, faves, map) {
        this.name = name
        this.zone = zone
        this.date = date
        this.upload = upload
        this.videos = videos
        this.photos = photos
        this.level = level
        this.comments = comments
        this.faves = faves
        this.map = map
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