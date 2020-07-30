const initState = {
    options: {
        colors: ['#121212', '#18b64b', '#e68a8c', '#df5f6c', '#dbb593'],
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true
            }
        },
        chart: {
            toolbar: {
                show: false
            },
            id: "basic-bar"
        },
        xaxis: {
            categories: ["Civil", "Computers", "EXTC", "IT", "Mechanical"]
        }
    },
    series: [
        {
            name: "Possibilities",
            data: []
        },
    ],
};

const rootReducer = (state = initState, action) => {
    if (action.type == 'RES_SUCCESS') {
        // console.log("Action : ", action.response.probabilities.map((prob, index) => {
        //     return prob * 100
        // }));
        let probab = action.response.probabilities.map((prob, index) => {
            return Math.round(prob * 100)
        });
        // let resp = action.response;
        return {
            ...state,
            series: [{
                name: "Probability % ",
                data: probab,
            }],
        }
    }
    return state
}

export default rootReducer;