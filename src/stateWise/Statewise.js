
import React, { useEffect, useState } from 'react';
import './statewise.css';

const Statewise = () => {

    const [data, setData] = useState([]);

    const CovidData = async () => {

        const response = await fetch('https://api.covid19india.org/data.json');
        const actualData = await response.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        CovidData();

    }, [])

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold"> INDIA </span>COVID-19 DashBoard</h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>STATE</th>
                                <th>CONFIRMED</th>
                                <th>RECOVERED</th>
                                <th>DEATHS</th>
                                <th>ACTIVE</th>
                                <th>UPDATED</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((itemVal, index)=>{
                                    return(
                                        <tr>
                                        <th>{itemVal.state}</th>
                                        <td>{itemVal.confirmed}</td>
                                        <td>{itemVal.recoverd}</td>
                                        <td>{itemVal.deaths}</td>
                                        <td>{itemVal.active}</td>
                                        <td>{itemVal.lastupdatedtime}</td>
                                    </tr>
                                    )
                                })
                            }

  
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Statewise;