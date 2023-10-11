import {React} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Dashboard.css';

require('highcharts/modules/accessibility')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/sonification')(Highcharts);

export default function BrowserPieChart({seriesData}) {

    // Removing overflow: hidden style so chart doesn't get clipped.
    const chartCallback = (chart) => {

        const domChart = document.getElementsByClassName('viz-container')[1]?.firstChild;
        domChart.style = '';

    }

    let options = {
        accessibility: {
            enabled: true,
            keyboardNavigation: {
                enabled: true,
                seriesNavigation:{
                    mode:'normal' 
                }
            },
            description: "According to WebAIM's screen reader user survey for the selected year, these are the browsers most often used along with each respondent's primary screen reader."
        },
        caption: {
            text: "According to WebAIM's screen reader user survey for the selected year, these are the browsers most often used along with each respondent's primary screen reader. "
        },
        chart: {
            type: 'pie',
            borderColor: '#5C5C5C',
            borderRadius: 2,
            borderWidth: 1,
            allowMutatingData: false
        },
        colors: ['#4059AD', '#6B9AC4', '#97D8C4', 'black', '#F4B982', '#E76F51'],
        credits: {
            enabled: false
        },
        exporting: {
            enabled: true,
        },
        legend: {
            enabled: true
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                }
            }
        },
        title: {
        text: 'Primary Browser',
        align: 'left'
        },
        series: [{
            name: 'Number of Respondents',
            colorByPoint: true,
            data: seriesData
        }]
    }
    

    return (
        <div className="viz-container">
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                callback={chartCallback}
            /> 
        </div>
    );
}    