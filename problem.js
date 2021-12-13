// api url
const api_url = "https://mach-eight.uc.r.appspot.com/";

// define integer input

// get API data
const getData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    if (response) {
        // hide loader
        document.getElementById('loading').style.display = 'none';
    } else {
        console.log("error");
    }
    return data;
}

function find() {
    getData(api_url)
        .then(function (data) {
            const intInput = document.getElementById("filter_height").value;
            const tablePlayers = document.getElementById("players")

            const players = []
            const results = []
            const originalPlayers = data.values
            originalPlayers.map((element) => {
                let result = intInput - element.h_in
                players.push([element, result])
                players.forEach((factor) => {
                    if (element.h_in == factor[1]) {
                        results.push([`${element.first_name} ${element.last_name}`, `${factor[0].first_name} ${factor[0].last_name}`])
                    }
                })
            })
            console.log(results)
            if (results.length > 0) {
                tablePlayers.innerHTML = results.map(player => {
                    return (`<tr><td>${player[0]}</td><td>${player[1]}</td></tr>`);
                })
            } else {
                tablePlayers.innerHTML = `<tr><td colspan="2" class="text-center">No matches found</td></tr>`
            }
        })
}


