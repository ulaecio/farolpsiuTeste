import {useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { vendasTipoBebida } from '../../types/sales';
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

const BarChartRota = () => {
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
                `${BASE_URL}/vendas/venda-tipo-bebida`,
            withCredentials: true
        })
            .then((response) => {
                const data = response.data as vendasTipoBebida[];
                const myLabels = data.map(x => x.tipo_bebida)
                const mySeries = data.map(x => x.qtde_venda);

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

export default BarChartRota;