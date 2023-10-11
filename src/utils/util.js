// Returns series data for the Primary Screen Reader line graph.
export function processLineGraphSeries(surveyData) {

    let lineGraphData = [];
    for (let i = surveyData.length - 1; i >=0; i--) {

        for (let screenReader of surveyData[i].primaryScreenReader) {

            const found = lineGraphData.find((sr) => sr?.name === screenReader?.name);

            if (found === undefined) {
                lineGraphData.push({
                    name: screenReader.name,
                    data: [screenReader.y]
                })
            } else {
                found.data.push(screenReader.y);
            }
        }
    }

    return lineGraphData;

}

export function getYearsList(surveyData) {

    let years = [];
    for (let i = surveyData.length - 1; i >=0; i--) {

        years.push(surveyData[i].year);
    }

    console.log(years);
    return years;

}