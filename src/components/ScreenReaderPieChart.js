import {React} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Dashboard.css';

require('highcharts/modules/accessibility')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/sonification')(Highcharts);

export default function ScreenReaderPieChart({seriesData}) {

    // Removing overflow: hidden style so chart doesn't get clipped.
    const chartCallback = (chart) => {

        const domChart = document.getElementsByClassName('viz-container')[0]?.firstChild;
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
            description: "According to WebAIM's screen reader user survey for the selected year, these are the primary screen readers used on desktop."
        },
        caption: {
            text: "According to WebAIM's screen reader user survey for the selected year, these are the primary screen readers used on desktop."
        },
        chart: {
            type: 'pie',
            borderColor: '#5C5C5C',
            borderRadius: 2,
            borderWidth: 1,
            allowMutatingData: false,
            animation: true
        },
        colors: ['#4059AD', '#6B9AC4', '#97D8C4', '#F4B982'],
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
        text: 'Primary Screen Reader',
        align: 'left'
        },
        series: [{
            name: 'Number of Respondents',
            colorByPoint: true,
            data: [...seriesData]
        }]
    }

    return (
        <div id='sr-viz' className='viz-container'>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                callback={chartCallback}
            /> 

        </div>
    );
}    