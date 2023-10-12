import {React} from 'react'
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import './Dashboard.css';

require('highcharts/modules/accessibility')(Highcharts);
require('highcharts/modules/exporting')(Highcharts);
require('highcharts/modules/export-data')(Highcharts);
require('highcharts/modules/sonification')(Highcharts);

export default function LineGraph({seriesData, years}) {

    const removeOverflowHidden = () => {
        const domChart = document.getElementsByClassName('line-graph-container')[0]?.firstChild;
        domChart.style = '';
    }

    const chartCallback = (chart) => {

        // Removing overflow: hidden style so chart doesn't get clipped.
        removeOverflowHidden();

        setTimeout(() => {
            // Remove end of chart tabbable markers, which are not visible..
            const endChartEls = document.getElementsByClassName('highcharts-exit-anchor');
            Array.prototype.forEach.call(endChartEls, (anchor) => anchor.tabIndex = "-1");
        }, 1000);

        // setTimeout((param) => {
        //     if (param !== undefined) {
        //         console.log(param);
        //         param.reflow();
        //     }
        // }, 0, chart);

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
            description: "A line graph of the primary screen readers used on desktop between 2009 and 2021.",
            screenReaderSection: {
                afterChartFormat: null,
                // onViewDataTableClick: removeOverflowHidden
            }
        },
        caption: {
            text: "A line graph of the primary screen readers used on desktop between 2009 and 2021."
        },
        chart: {
            type: 'line',
            borderColor: '#5C5C5C',
            borderRadius: 2,
            borderWidth: 1,
            allowMutatingData: false
        },
        colors: ['#4059AD', '#6B9AC4', '#97D8C4', '#F4B982'],
        credits: {
            enabled: false
        },
        exporting: {
            enabled: true,
            buttons: {
                contextButton: {
                    menuItems: ['viewFullscreen', 'separator', 'downloadXLS', 'viewData', 'separator', 'playAsSound']
                }
            }
        },
        title: {
        text: 'Primary Screen Reader over Time',
        align: 'left'
        },
        series: seriesData,
        xAxis: {
            categories: years
        },
        yAxis: {
            title: {
                text: 'Number of Respondents'
            }
        },
    }

    return (
        <div className='line-graph-container'>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
                callback={chartCallback}

            /> 
        </div>
    );
}    