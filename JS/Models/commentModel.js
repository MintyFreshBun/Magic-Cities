/**
 * class model of a city
 */
export default class Comment {
    constructor(cityname,username, date, comment) {
        this.cityname = cityname
        this.username = username        
        this.date = date        
        this.comment = comment
    }        
        
}

// fuctions to sort the comments date order from most recent to oldest