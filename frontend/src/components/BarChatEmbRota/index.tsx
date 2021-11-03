import {useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { vendasPorEmbalagem } from '../../types/sales';
import { BASE_URL, requestBackend } from '../../utils/request';

type Seriesdata = {
    name: string;
    data: number[];
}
type Chartdata = {
    labels: {
        categories: String[];
    };
    series: Seriesdata[];
}

const BarChartEmbRota = () => {
    const [chartData, setChartData] = useState<Chartdata>({
        labels: {
            categories: []
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    });

    useEffect(() => {
        requestBackend({
            url:
                `${BASE_URL}/vendas/venda-embalagem`,
            withCredentials: true
        })
            .then((response) => {
                const data = response.data as vendasPorEmbalagem[];
                const myLabels = data.map(x => x.embalagem)
                const mySeries = data.map(x => x.venda);

                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "Venda",
                            data: mySeries
                        }
                    ]
                });
            });
    }, []);
    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    return (
        <Chart
            options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
}

export default BarChartEmbRota;