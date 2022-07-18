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
    }
};