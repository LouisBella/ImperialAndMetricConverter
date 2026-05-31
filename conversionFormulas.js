
//We're taking an array of values or a single one 

const toKm = (miles) => {

    if (Array.isArray(miles)) {
        let temparray = [];
        for (let i = 0; i < miles.length; i++) {
            if (typeof (miles[i]) == "number") {
                temparray.push((miles[i] * 1.6).toFixed(2) + " ");
            }
            else {
                temparray.push(null);
            }


        }

        return temparray;
    }
    else if (typeof (miles) == "number") {
        return (miles * 1.6).toFixed(2);
    }
    else {
        return null;
    }



}



const toCelsius = (fahr) => {
    if (Array.isArray(fahr)) {
        let temparray = [];

        for (let i = 0; i < fahr.length; i++) {
            //check
            if (typeof (fahr[i]) == "number") {
                temparray.push(((fahr[i] - 32) * (5.0 / 9.0)).toFixed(2) + " ");
            }
            else {
                temparray.push(null);
            }

        }

        return temparray;
    }
    else if (typeof (fahr) == "number") {
        return ((fahr - 32) * (5.0 / 9.0)).toFixed(2);
    }
    else {
        return null;
    }


}





//map
const toLbs = (kgs) => {

    if (Array.isArray(kgs)) {
        let temparray = [];

        for (let i = 0; i < kgs.length; i++) {
            if (typeof (kgs[i]) == "number") {
                temparray.push((kgs[i] * 2.205).toFixed(2) + " ");
            }
            else {
                temparray.push(null);
            }

        }

        return temparray;
    }
    else if (typeof (kgs) == "number") {
        return (kgs * 2.205).toFixed(2);
    }
    else {
        return null;
    }



}





const toMiles = (km) => {
    if (Array.isArray(km)) {
        let temparray = [];
        for (let i = 0; i < km.length; i++) {
            if (typeof (km[i]) == "number") {
                temparray.push((km[i] * 0.62137119).toFixed(2) + " ");
            }
            else {
                temparray.push(null);
            }

        }

        return temparray;
    }
    else if (typeof (km) == "number") {
        return (km * 0.62137119).toFixed(2)
    }
    else {
        return null;
    }



}


const toFahr = (cel) => {
    if (Array.isArray(cel)) {
        let temparray = [];
        for (let i = 0; i < cel.length; i++) {
            if (typeof (cel[i]) == "number") {
                temparray.push(((cel[i] * 1.8) + 32).toFixed(2) + " ");
            }
            else {
                temparray.push(null);
            }

        }
        return temparray;
    }
    else if (typeof (cel) == "number") {
        return ((cel * 1.8) + 32).toFixed(2);
    }
    else {
        return null;
    }
}



const toKgs = (lbs) => {
    if (Array.isArray(lbs)) {
        let temparray = [];
        for (let i = 0; i < lbs.length; i++) {
            if (typeof (lbs[i]) == "number") {
                temparray.push((lbs[i] / 2.205).toFixed(2) + " ");
            }
            else {
                temparray.push(null);
            }

        }
        return temparray;
    }
    else if (typeof (lbs) == "number") {
        return (lbs / 2.205).toFixed(2);
    }
    else {
        return null;
    }

}









const selector = (before, after) => {
    let a = before + after;
    let tell;
    switch (a) {
        case "kmmiles":
            tell = (value) => toMiles(value);
            break;


        case "fahrcel":
            tell = (value) => toCelsius(value);
            break;

        case "lbskgs":
            tell = (value) => toKgs(value);
            break;

        case "mileskm":
            tell = (value) => toKm(value);
            break;

        case "celfahr":
            tell = (value) => toFahr(value);
            break;

        case "kgslbs":
            tell = (value) => toLbs(value);
            break;

        default:
            return null;


    }

    return tell;
}

