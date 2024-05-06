function make_album (artist_name:string, album_title:string, tracks?:number){
    let album: {artist:string, title: string, tracks?: number} = {
        artist: artist_name,
        title: album_title,
    };

    if (tracks !== undefined){
        album.tracks = tracks;
    }

    return album;
}

let album1 = make_album("Naveed", "album title 1")

let album2 = make_album("asad", "album title 2")

let album3 = make_album("asim", "album title 3", 12)

console.log(album1);
console.log(album2);
console.log(album3);