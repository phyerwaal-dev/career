import { act } from "react-dom/test-utils";

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
    user: []
};

const rootReducer = (state = initState, action) => {
    if (action.type == 'RES_SUCCESS') {
        let probab = action.response.probabilities.map((prob) => {
            return Math.round(prob * 100)
        });
        return {
            ...state,
            series: [{
                name: "Probability % ",
                data: probab,
            }],
        }
    }
    else if (action.type == 'USER_DATA') {
        let userData = action.user;
        return {
            ...state,
            user: userData
        }
    }
    return state
}

export default rootReducer;