import React, { createContext, useEffect, useState } from 'react';

export const DashboardContext = createContext();
const DashboardProvider = ({ children }) => {
    const [rawdata, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch('https://visualization-dashboard-server-omega.vercel.app/data')
            .then(res => res.json())
            .then(x => {
                setData(x)
                setLoading(false)
            })
    }, []);

    //http://localhost:5000/data



    const value = {
        rawdata,
        loading
    }
    return (
        <div>
            <DashboardContext.Provider value={value}>
                {children}
            </DashboardContext.Provider>
        </div>
    );
};

export default DashboardProvider;