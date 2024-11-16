// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Table from '@mui/material/Table';
// import Paper from '@mui/material/Paper';
// import CircularProgress from '@mui/material/CircularProgress';

// export default function Data() {
//     const [dat, setdata] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get('https://swapi.dev/api/people')
//             .then((response) => {
//                 console.log('API Response:', response.data.results);
//                 setdata(response.data.results);
//                 setLoading(false); // Data fetched, so set loading to false
//             });
//     }, []);

//     return (
//         <div>
//             <h1>Data</h1>
//             {loading ? (
//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px' }}>
//                     <CircularProgress size={80} thickness={5} color="secondary" />
//                 </div>
//             ) : (
//                 <div>
//                     <TableContainer component={Paper} sx={{ marginLeft: "auto", marginRight: "auto", width: "80%" }}>
//                         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                             <TableHead>
//                                 <TableRow sx={{ backgroundColor: "#007FFF", }}>
//                                     <TableCell sx={{ color: "white" }}>Name</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Height</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Hair color</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Skin color</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Gender</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {dat.map((row) => (
//                                     <TableRow
//                                         key={row.name}
//                                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                     >
//                                         <TableCell>{row.name}</TableCell>
//                                         <TableCell align="right">{row.height}</TableCell>
//                                         <TableCell align="right">{row.hair_color}</TableCell>
//                                         <TableCell align="right">{row.skin_color}</TableCell>
//                                         <TableCell align="right">{row.gender}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                     <div>
//                         <h2>JSON Data:</h2>
//                         <pre>{JSON.stringify(dat, null, 5)}</pre>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Table from '@mui/material/Table';
// import Paper from '@mui/material/Paper';
// import CircularProgress from '@mui/material/CircularProgress';

// export default function Data() {
//     const [dat, setdata] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         axios.get('https://swapi.dev/api/people')
//             .then((response) => {
//                 console.log('API Response:', response.data.results);

//                 // Stringify the fetched data before setting it in the state
//                 const stringifiedData = JSON.stringify(response.data.results);
//                 console.log("hlo",stringifiedData);

//                 setdata(stringifiedData);
                

//                 setLoading(false); // Data fetched, so set loading to false
//             });
//     }, []);
//     console.log("byy",JSON.parse(dat))

//     return (
//         <div>
//             <h1>Data</h1>
//             {loading ? (
//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px' }}>
//                     <CircularProgress size={80} thickness={5} color="secondary" /> {/* Customize the spinner */}
//                 </div>
//             ) : (
//                 <TableContainer component={Paper} sx={{ marginLeft: "auto", marginRight: "auto", width: "80%" }}>
//                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                         <TableHead>
//                             <TableRow sx={{ backgroundColor: "#007FFF", }}>
//                                 <TableCell sx={{ color: "white" }}>Name</TableCell>
//                                 <TableCell sx={{ color: "white" }} align="right">Height</TableCell>
//                                 <TableCell sx={{ color: "white" }} align="right">Hair color</TableCell>
//                                 <TableCell sx={{ color: "white" }} align="right">Skin color</TableCell>
//                                 <TableCell sx={{ color: "white" }} align="right">Gender</TableCell>
//                             </TableRow>
//                         </TableHead>
//                         <TableBody>
//                             {JSON.parse(dat).map((row) => ( // Parse the stringified data
//                                 <TableRow
//                                     key={row.name}
//                                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                 >
//                                     <TableCell>{row.name}</TableCell>
//                                     <TableCell align="right">{row.height}</TableCell>
//                                     <TableCell align="right">{row.hair_color}</TableCell>
//                                     <TableCell align="right">{row.skin_color}</TableCell>
//                                     <TableCell align="right">{row.gender}</TableCell>
//                                 </TableRow>
//                             ))}
//                         </TableBody>
//                     </Table>
//                 </TableContainer>
//             )}
//         </div>
//     );
// }

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Table from '@mui/material/Table';
// import Paper from '@mui/material/Paper';
// import CircularProgress from '@mui/material/CircularProgress';

// export default function Data() {
//     const [dat, setdata] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('https://swapi.dev/api/people');
//             console.log('API Response:', response.data.results);
//             setdata(response.data.results);
//             setLoading(false); // Data fetched, so set loading to false
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setLoading(false); // Set loading to false even in case of an error
//         }
//     };

//     return (
//         <div>
//             <h1>Data</h1>
//             {loading ? (
//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px' }}>
//                     <CircularProgress size={80} thickness={5} color="secondary" />
//                 </div>
//             ) : (
//                 <div>
//                     <TableContainer component={Paper} sx={{ marginLeft: "auto", marginRight: "auto", width: "80%" }}>
//                         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                             <TableHead>
//                                 <TableRow sx={{ backgroundColor: "#007FFF", }}>
//                                     <TableCell sx={{ color: "white" }}>Name</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Height</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Hair color</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Skin color</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Gender</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {dat.map((row) => (
//                                     <TableRow
//                                         key={row.name}
//                                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                     >
//                                         <TableCell>{row.name}</TableCell>
//                                         <TableCell align="right">{row.height}</TableCell>
//                                         <TableCell align="right">{row.hair_color}</TableCell>
//                                         <TableCell align="right">{row.skin_color}</TableCell>
//                                         <TableCell align="right">{row.gender}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                     <div>
//                         <h2>JSON Data:</h2>
//                         <pre>{JSON.stringify(dat, null, 2)}</pre>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Table from '@mui/material/Table';
// import Paper from '@mui/material/Paper';
// import CircularProgress from '@mui/material/CircularProgress';

// export default function Data() {
//     const [dat, setdata] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [currentPage, setCurrentPage] = useState(1);

//     useEffect(() => {
//         fetchData(currentPage);
//     }, [currentPage]);

//     const fetchData = async (page) => {
//         try {
//             setLoading(true);
//             const response = await axios.get(`https://swapi.dev/api/people/?page=${page}`);
//             console.log('API Response:', response.data.results);
//             setdata(response.data.results);
//             setLoading(false); // Data fetched, so set loading to false
//         } catch (error) {
//             console.error('Error fetching data:', error);
//             setLoading(false); // Set loading to false even in case of an error
//         }
//     };

//     const handleNextPage = () => {
//         setCurrentPage(currentPage + 1);
//     };

//     const handlePreviousPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     return (
//         <div>
//             <h1>Data</h1>
//             {loading ? (
//                 <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px' }}>
//                     <CircularProgress size={80} thickness={5} color="secondary" />
//                 </div>
//             ) : (
//                 <div>
//                     <TableContainer component={Paper} sx={{ marginLeft: "auto", marginRight: "auto", width: "80%" }}>
//                         <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                             <TableHead>
//                                 <TableRow sx={{ backgroundColor: "#007FFF", }}>
//                                     <TableCell sx={{ color: "white" }}>Name</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Height</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Hair color</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Skin color</TableCell>
//                                     <TableCell sx={{ color: "white" }} align="right">Gender</TableCell>
//                                 </TableRow>
//                             </TableHead>
//                             <TableBody>
//                                 {dat.map((row) => (
//                                     <TableRow
//                                         key={row.name}
//                                         sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                     >
//                                         <TableCell>{row.name}</TableCell>
//                                         <TableCell align="right">{row.height}</TableCell>
//                                         <TableCell align="right">{row.hair_color}</TableCell>
//                                         <TableCell align="right">{row.skin_color}</TableCell>
//                                         <TableCell align="right">{row.gender}</TableCell>
//                                     </TableRow>
//                                 ))}
//                             </TableBody>
//                         </Table>
//                     </TableContainer>
//                     <div>
//                         <button onClick={handlePreviousPage} disabled={currentPage === 1}>Previous</button>
//                         <button onClick={handleNextPage}>Next</button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import './dat.css'
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';

export default function Data() {
    const [dat, setdata] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setLoading(true); // Set loading to true when fetching data
        try {
            const response = await axios.get('https://swapi.dev/api/people');
            console.log('API Response:', response.data.results);
            setdata(response.data.results);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading to false after fetching, whether successful or not
        }
    };
  
    return (
        <div>
            <h1>Data</h1>
            {loading ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                    <CircularProgress size={80} thickness={5} color="secondary" />
                </div>
            ) : (
                <div>
                    <TableContainer component={Paper} sx={{ marginLeft: "auto", marginRight: "auto", width: "80%" }}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow sx={{ backgroundColor: "#007FFF", }}>
                                    <TableCell sx={{ color: "white" }}>Name</TableCell>
                                    <TableCell sx={{ color: "white" }} align="right">Height</TableCell>
                                    <TableCell sx={{ color: "white" }} align="right">Hair color</TableCell>
                                    <TableCell sx={{ color: "white" }} align="right">Skin color</TableCell>
                                    <TableCell sx={{ color: "white" }} align="right">Gender</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {dat.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{row.name}</TableCell>
                                        <TableCell align="right">{row.height}</TableCell>
                                        <TableCell align="right">{row.hair_color}</TableCell>
                                        <TableCell align="right">{row.skin_color}</TableCell>
                                        <TableCell align="right">{row.gender}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            )}
        </div>
    );
}
