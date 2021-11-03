    import Chart from 'react-apexcharts';
    import { useEffect, useState } from 'react';
    import { VendaTotalPorFamilia } from '../../types/sales';
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
    
    const BarChartSetor = () => {
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
            axios.get(`${BASE_URL}/vendas/total-vendas-familia`, {headers: {Authorization: "Bearer " + getAuthData().access_token }})
                .then((response) => {
                    const data = response.data as VendaTotalPorFamilia[];
                    const myLabels = data.map(x => x.familia)
                    const mySeries = data.map(x => x.total_venda);
    
                    setChartData({
                        labels: {
                            categories: myLabels
                        },
                        series: [
                            {
                                name: "Vendas",
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

export default BarChartSetor;
