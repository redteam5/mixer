$(() => {
    $('.modal').modal();
});

$(".delete-song").on("click", function () {
    var fullId = $(this).attr("id").split("-")
    var songID = fullId[1]

    let songDelConfirm = confirm("are you sure you want to delete this song?");
    if (songDelConfirm) {
        deleteSongDb(songID);
        window.location.reload()
    }
})

async function deleteSongDb(songID) {

    const response = await fetch(`/api/songs/${songID}`, {
        method: 'DELETE',

        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (response.ok) {

        console.log("cool");

    } else {
        console.log(response);

        alert(response.statusText);
    }
}

