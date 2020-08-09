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
    user: [],
    predictedBranch: "",
    userSelection: [],
    hasFilledDetails: false,
    hasFilledAll: false
};

const rootReducer = (state = initState, action) => {

    switch (action.type) {
        case 'RES_SUCCESS':
            let probab = action.response.probabilities.map((prob) => {
                return Math.round(prob * 100)
            });
            let predBranch = action.response.branch;
            return {
                ...state,
                series: [{
                    name: "Probability % ",
                    data: probab,
                }],
                predictedBranch: predBranch,
                hasFilledAll: true
            };
        case 'USER_DATA':
            let userData = action.user;
            return {
                ...state,
                user: userData,
                hasFilledDetails: true
            };
        // case 'PRED_BRANCH':
        //     let predBranch = action.pred_branch.branch;
        //     return {
        //         ...state,
        //         predictedBranch: predBranch
        //     };
        case 'USER_SELECTION':
            let selection = action.selection;
            return {
                ...state,
                userSelection: selection
            };
        default:
            return state;
    }



    // if (action.type == 'RES_SUCCESS') {
    //     let probab = action.response.probabilities.map((prob) => {
    //         return Math.round(prob * 100)
    //     });
    //     return {
    //         ...state,
    //         series: [{
    //             name: "Probability % ",
    //             data: probab,
    //         }],
    //     }
    // }
    // else if (action.type == 'USER_DATA') {
    //     let userData = action.user;
    //     return {
    //         ...state,
    //         user: userData
    //     }
    // }
    // else if (action.type == 'PRED_BRANCH') {
    //     let predBranch = action.pred_branch;
    //     return {
    //         ...state,
    //         predictedBranch: predBranch
    //     }
    // }
    // else if (action.type == 'USER_SELECTION') {
    //     let selection = action.selection;
    //     return {
    //         ...state,
    //         userSelection: selection
    //     }
    // }
    // return state
}

export default rootReducer;