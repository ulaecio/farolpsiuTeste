import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { vendasPorSetor } from 'types/sales';
import { requestBackend, BASE_URL } from 'utils/request';

type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {
//DADOS DINAMICOS
    const [chartData, setChartData] = useState<ChartData>({ labels: [], series: [] });

    useEffect(() => {
        requestBackend({
            url:
                `${BASE_URL}/vendas/volume-vendas-setor`,
            withCredentials: true
        })
            .then((response) => {
                const data = response.data as vendasPorSetor[];
                const myLabels = data.map(x => x.setor)
                const mySeries = data.map(x => x.total_venda);

                setChartData({ labels: myLabels, series: mySeries });
            })
    }, []);

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart
            options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type='donut'
            height='240'
        />
    );
}

export default DonutChart;