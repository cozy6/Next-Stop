import styles from './BarChart.module.css'
import { useState, useEffect } from "react"
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

interface ChartData {
    labels: string[],
    datasets: {
        label: string,
        data: number[],
        borderColor: string,
        backgroundColor: string
    }[]
}

interface ChartOptions {
    plugins: {
        legend: {
            position: 'top' | 'bottom' | 'left' | 'right' | 'chartArea' | { [scaleId: string]: number } | undefined
        },
        title: {
            display: boolean,
            text: string
        }
    },
    maintainAspectRatio: boolean,
    responsive: boolean
}

const BarChart: React.FC = () => {
    const [chartData, setChartData] = useState<ChartData>({
        labels: [],
        datasets: []
    })

    const [chartOptions, setChartOptions] = useState<ChartOptions>({} as ChartOptions)

    useEffect(() => {
        setChartData({
            labels:["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
            datasets: [
                {
                    label: "Sales $",
                    data: [10234, 54034, 6435, 9482, 3984, 2049, 8294],
                    borderColor: 'rgb(53, 162, 235)',
                    backgroundColor: 'rgba(53, 162, 235, 0.4)'
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend:{
                    position: 'top'
                }, 
                title:{
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })

    }, [])

    return(
        <div className={styles.container}>
            <Bar data={chartData} options={chartOptions}/>
        </div>
    )
}

export default BarChart;
