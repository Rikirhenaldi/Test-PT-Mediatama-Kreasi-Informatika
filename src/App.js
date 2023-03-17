import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';


const App = () => {
  const [finalArr1, setFinalArr1] = useState([])

  const data = [[0, 2, 3, 4, 6, 8, 9, 11, 13], [0, 3, 6, 8, 10, 11, 13], [0, 2, 4, 6, 9, 10, 11, 13], [0, 2, 3, 4, 6, 8, 10, 11, 13], [0, 2, 3, 4, 6, 8, 9, 11, 13]]

  const tableData = [[0,1,2,3],[0,3,1,2],[1,2,3,4],[2,3,1,4],[0,2,2,3]]  
  const resultsSlash = []

  const generateSlashAndX = (item) => {
    for (let index = 0; index < item.length; index++) {
      let row = "-"
      console.log(item[index], "ini item index");
      for (let j = 0; j < item[index].length - 1; j++) {
        if (item[index].length > 8) {
          if (item[index][j] + 1 === item[index][j + 1]) {
            row += "-"
          } else {
            row += "x-"
          }
        } else if (item[index].length === 8) {
          if (item[index][j] + 2 === item[index][j + 1]) {
            row += "x-"
          } else if (item[index][j] + 2 > item[index][j + 1]) {
            row += "x---"
          } else {
            row += "x"
          }
        } else {
          if (item[index][j] + 2 === item[index][j + 1]) {
            row += "x-"
          } else if (item[index][j] + 2 > item[index][j + 1]) {
            row += "-"
          } else {
            row += "xx-"
          }
        }

      }
      resultsSlash.push(row)
      console.log(resultsSlash, "<<<<");
    }
    return setFinalArr1(resultsSlash)
  }


  const setTableData = (item) => {
    let formatData = []
    for (let index = 0; index < item.length; index++) {
      for (let j = 0; j < item[index].length; j++) {
        formatData.push({
          key: item[index][j],
          colSpan: 1,
          rowSpan: 1
        })
    }
  }
  console.log(formatData, 'ni tabel row')
}

  useEffect(() => {
    generateSlashAndX(data)
    // return () => {
    // }
  }, [])

  return (
    <div style={{ width: "100%", height: "100vh", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center" }}>
      <div style={{marginBottom : 40}}>
      <div>Jawaban soal No 1 :</div>
      <ul>
        {finalArr1.map((item, index) => {
          return (
            <li key={index}>{item}</li>
          )
        })}
      </ul>
      </div>
      <div style={{marginBottom : 20}}>
      <div style={{marginBottom: 20}}>Jawaban soal No 2 (mohon maaf tidak bisa diselesaikan)</div>
      <table>
        {tableData.map((item, index) => {
          return (
            <tr key={index}>
              {item.map((itemTable, indexTable) => {
                return(
                  <td colSpan={2} rowSpan={1} key={indexTable}>{itemTable}</td>
                )
              })}
            </tr>
          )
        })}
      </table>
      </div>
    </div>
  )
}


export default App;
