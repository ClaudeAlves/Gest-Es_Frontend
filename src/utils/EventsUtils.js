/**
 * Methods that helps deal with events for and from the backend.
 */
export default {
    convertPeriodsToEvents(array) {
        let toReturn = [];
        for(let i = 0; i < array.length; i++) {
            let color = array[i].tag.includes("test") ? "IndianRed" : "DarkSeaGreen"
            toReturn.push(
                {
                    "id": array[i].id,
                    "start": this.formatDateFromBackend(array[i].start),
                    "end": this.formatDateFromBackend(array[i].end),
                    "text": array[i].tag,
                    "backColor": color,
                    "barColor": color,
                }
            )
        }
        return toReturn;
    },
    formatDateFromBackend(string) {
        let separatedDateTime = string.toLocaleString().split(" ")
        let date = separatedDateTime[0].split("/")
        const dateSeparator = "-"
        const dateTimeSeparator = "T"
        let formated = date[2] + dateSeparator + date[1] + dateSeparator + date[0] +
            dateTimeSeparator + separatedDateTime[1]
        //console.log(formated)
        return formated
    },
    // backend format 2022-07-18T12:04:48.314Z
    formatDateToBackend(date, time) {
        return date + "T" + time + ":00" + "Z";
    },
    areDatesValid(startingDate, endingDate) {
        let separatedStart = startingDate.split("-");
        let separatedEnd = endingDate.split("-");
        if (separatedStart[0] < separatedEnd[0]) {
            return true;
        } else if (separatedStart[0] > separatedEnd[0]) {
            return false;
        } else {
            if (separatedStart[1] < separatedEnd[1]) {
                return true;
            } else if (separatedStart[1] > separatedEnd[1]) {
                return false;
            } else {
                return separatedStart[2] <= separatedEnd[2];
            }
        }

    },
    areTimesValid(startingTime, endingTime) {
        let separatedStart = startingTime.split(":");
        let separatedEnd = endingTime.split(":");

        if (separatedStart[0] < separatedEnd[0]) {
            return true;
        } else if (separatedStart[0] > separatedEnd[0]) {
            return false;
        } else {
            return separatedStart[1] < separatedEnd[1];
        }
    }
};