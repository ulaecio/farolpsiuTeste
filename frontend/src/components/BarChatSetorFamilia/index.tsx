import Chart from 'react-apexcharts';
import { useEffect, useState } from 'react';
import { volumeSetorTipoBebida } from '../../types/sales';
import { BASE_URL } from '../../utils/request';
import axios from 'axios';
import { getAuthData } from 'utils/storage';

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

const BarChartSetorFamilia = () => {
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
        axios.get(`${BASE_URL}/vendas/volume-setor-tipo`, {headers: {Authorization: "Bearer " + getAuthData().access_token }})
            .then((response) => {
                const data = response.data as volumeSetorTipoBebida[];
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

export default BarChartSetorFamilia;