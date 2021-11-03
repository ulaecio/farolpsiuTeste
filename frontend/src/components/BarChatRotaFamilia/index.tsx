import axios from 'axios';
import {useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { getAuthData } from 'utils/storage';
import { vendasTipoBebida } from '../../types/sales';
import { BASE_URL } from '../../utils/request';

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

const BarChartRotaFamilia = () => {
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
        axios.get(`${BASE_URL}/vendas/volume-tipo-bebida`, {headers: {Authorization: "Bearer " + getAuthData().access_token }})
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
                            name: "Volume",
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

export default BarChartRotaFamilia;
