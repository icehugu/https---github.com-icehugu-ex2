
class photosClass {

    #albumId
    #id
    #title
    #thumbnailUrl

    constructor(albumId, id, title, thumbnailUrl) {
        this.#albumId = albumId
        this.#id = id
        this.#title = title
        this.#thumbnailUrl = thumbnailUrl
    }

    get id() {
        return this.#id
    }
    set id(newId) {
        this.#id = newId
    }

    get albumId() {
        return this.#albumId;
    }
    get title() {
        return this.#title
    }
    set albumId(newAlbumId) {
        this.#albumId = newAlbumId
    }
    set title(newTitle) {
        this.#title = newTitle
    }

    get thumbnailUrl(){
        return this.#thumbnailUrl;
    }

    set thumbnailUrl(newThumbnailUrl){
        this.#thumbnailUrl = newThumbnailUrl;
    }
}