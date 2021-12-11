// api url
const api_url =
    "https://mach-eight.uc.r.appspot.com/";

// Defining async function
const getDetails = async (url) => {
    return await fetch(url)
        .then(function(response) {
            if (response) {
                // hide loader
                document.getElementById('loading').style.display = 'none';
            } else {
                console.log("error");
            }
            return response.json();
        });
}

// find array get pairs function
function getPairs(nums, target) {
    const previousValues ={}
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i]
        if (!(complement in previousValues)) {
            previousValues[nums[i]] = i
        } else {
            return [previousValues[complement], i]
        }
    }
}

const allTwoSum = (nums, target) => {
    const map = {};
    const results = [];
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            results.push([target - nums[i], nums[i]]);
            continue;
        };
        map[target - nums[i]] = true;
    };
    return results;
};

// Function to define innerHTML for HTML table
function show(data) {
    const filteredValue = document.getElementById("filter_height").value;
    const tablePlayers = document.getElementById("players")
    const dataValues = data.values
    const numbers = []

    dataValues.forEach(function(element) {
        numbers.push(element.h_in)
    })

    const index = getPairs(numbers, filteredValue)

    const index2 = allTwoSum(numbers, filteredValue)
    console.log(index2)


    if (index.length === 0) {
        tablePlayers.innerHTML = `<tr><td colspan="4" class="text-center">No matches found</td></tr>`
    } else {
        const output = index.map(i => dataValues[i])

        tablePlayers.innerHTML = output.map(player => {
            return (
                `<tr>
                    <td>${player.first_name}</td>
                    <td>${player.last_name}</td>
                    <td>${player.h_in}</td>
                    <td>${player.h_meters}</td>
                </tr>`
            );
        })
    }


}

function find() {
    getDetails(api_url).then(function(data) {
        show(data);
    })
}