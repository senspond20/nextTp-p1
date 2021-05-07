import React from 'react';
import {AgGridColumn, AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {GoStar} from "react-icons/go";
// import '@public/app.scss'
import { useEffect, useState, useRef } from 'react';
// import styled from 'styled-components';


const AgDataGrid = () => {
    const [rowData, setRowData] = useState([]);
    const gridRef = useRef(null);
    useEffect(() => {
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
            .then(result => result.json())
            .then(rowData => setRowData(rowData))
    }, []);
    const onButtonClick = e => {
        // if(gridRef!=null){
            const selectedNodes = gridRef.current.api.getSelectedNodes()
            const selectedData = selectedNodes.map( node => node.data )
            const selectedDataStringPresentation = selectedData.map( node => `${node.make} ${node.model}`).join(', ')
            alert(`Selected nodes: ${selectedDataStringPresentation}`)
    }
    const getIcon =() =>(  <GoStar/>)

   return (
       <div className="ag-theme-alpine" style={{height: '500px',width: '100%'}}>
         
          <button onClick={onButtonClick}>Get selected rows</button>
           <AgGridReact
              ref={gridRef}
               rowData={rowData}
              rowSelection="multiple"
            //   groupSelectsChildren={true}
            //   autoGroupColumnDef={{
            //                 headerName: "Model",
            //                 field: "model",
            //                 cellRenderer:'agGroupCellRenderer',
            //                 cellRendererParams: {
            //                     checkbox: true
            //                 }
            //            }}

              
              >
               <AgGridColumn checkboxSelection={true} width={20}/>
               <AgGridColumn field="make" sortable={true} filter={true} rowGroup={ false }></AgGridColumn>
               <AgGridColumn field="model" sortable={true} filter={true}></AgGridColumn>
               <AgGridColumn field="price" sortable={true} filter={true}></AgGridColumn>
        
           </AgGridReact>
       </div>
   );
};

export default AgDataGrid;