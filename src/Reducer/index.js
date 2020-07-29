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
            data: [100, 40, 45, 50, 49]
        },
    ],
};

const rootReducer = (state = initState, action) => {
    if (action.type == 'RES_SUCCESS') {
        state.series.data = action.response["probabilities"];
        // let resp = action.response;
        // return {
        //     ...state,
        //     data: resp,
        // }
    }
    return state
}

export default rootReducer;