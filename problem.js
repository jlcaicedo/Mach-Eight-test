// api url
const api_url = "https://mach-eight.uc.r.appspot.com/";

// define integer input
const intInput = 139

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


getData(api_url)
    .then(function (data) {
        const players = []
        const results = []
        const originalPlayers = data.values
        originalPlayers.map((element, index1) => {
            let result = intInput - element.h_in
            players.push([index1, result])
            players.forEach((factor, index2) => {
                if(element.h_in == factor[1]) {
                    results.push([index1, index2])
                }
            })

        })
        console.log(results)
        console.log(originalPlayers)
    })


