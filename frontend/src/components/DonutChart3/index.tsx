import axios from 'axios';
import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { getAuthData } from 'utils/storage';
import { vendasPorEmbalagem } from '../../types/sales';
import { BASE_URL } from '../../utils/request';


type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart3 = () => {
    //DADOS DINAMICOS
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        axios.get(`${BASE_URL}/vendas/venda-embalagem`, { headers: { Authorization: "Bearer " + getAuthData().access_token } })
            .then((response) => {
                const data = response.data as vendasPorEmbalagem[];
                const myLabels = data.map(x => x.embalagem)
                const mySeries = data.map(x => x.venda);

                setChartData({ labels: myLabels, series: mySeries });
            })
    }, []);

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <>
            {chartData.labels.length && chartData.series &&
                <Chart
                    options={{ ...options, labels: chartData.labels }}
                    series={chartData.series}
                    type='donut'
                    height='240'
                />
            }
        </>
    );
}

export default DonutChart3;