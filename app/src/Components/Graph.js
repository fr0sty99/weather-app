import React from 'react';
import { Line } from 'react-chartjs-2';

const Graph = () => {

    const labels = [
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
        'Sonntag'];
    const data = [7, 8, 6, 6, 5, 4, 5, 5];
    const average = data.reduce((a, b) => a + b, 0) / data.length;
    const maxDiff = Math.max(...data) - Math.min(...data);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Chart.js Line Chart',
            },
            datalabels: {
                anchor: 'end',
                align: 'top',
                formatter: Math.round,
                font: {
                    weight: 'bold'
                }
            }
        },
        elements: {
            point: {
                radius: 0,
            }
        },
        scales: {
            y: {
                min: average - maxDiff,
                max: average + maxDiff
            }
        },
        x: {
            beginAtZero: true
        }
    }

    return <div>
        <Line
            data={{
                labels,
                datasets: [
                    {
                        data: data,
                        borderColor: 'rgb(254, 203, 0)',
                        backgroundColor: 'rgb(254, 244, 210)',
                        tension: 0,
                        fill: true,
                    }
                ],
            }}
            options={options}
        ></Line>
    </div >;
};

export default Graph;