import React, { useEffect , useState } from 'react'
import {Navbar} from "../Navbar";
import "../Navbar.css";
import axios from 'axios';
import Dropdown from 'react-bootstrap/Dropdown';
import DataTable, {createTheme} from 'react-data-table-component';
import chinese from "../../images/chinese.png";
import stp from "../../images/stp.png";
import eu from "../../images/eu.png";
import usa from "../../images/usa.png";
import brazil from "../../images/brazil.png";
import canada from "../../images/canada.png";
import japan from "../../images/japan.png";

export const Currency = () => {
  const [values,setValues]=useState({
    value1:'',
    value2:'',
    rates:'',
    currencies:"",
    converted_currency:""
  })
  const [options,setOptions] =useState([]);
  const [selectedOption, setSelectedOption] = useState("Please choose a transaction");
    const [selectedOption1, setSelectedOption1] = useState("Please select the type of company");

    useEffect(() => {
      const fetchRates = async()=>{
          const ratesresponse = await axios.get("https://localhost:8801/api/getRates");
          console.log(ratesresponse)
          if(ratesresponse.status === 200){
            setOptions(ratesresponse.data);
          }
      } 
      fetchRates();
    },[])
  const handleInput =  (e)=>{
    setValues(prev => ({
        ...prev,
        [e.target.name]: e.target.value
    }));
  }


  const columns = [
    {
      name:'Country',
      cell:(row)=> <img src={getFlagImage(row.currency)} alt={row.currency} style={{width:'50px' ,height:'auto'}}/>,
      sortable:true
    },
    {
      name:'Currency',
      selector:row=>row.currency,
      sortable:true,
    },
    {
      name:'Rates',
      selector:row=>row.rates,
      sortable:true
    }
  ]

  const getFlagImage = (country)=>{
     switch(country){
      case 'US Dollar':
        return usa;
      case 'European Union':
        return eu;
      case 'Chinese Yuan Renminbi':
        return chinese
      case 'Canadian Dollar':
        return canada;
      case 'Japanese Yen':
        return japan
      case 'Brazilian Real':
        return brazil;
     }
  }

  createTheme('solarized', {
    background: {
      default: 'rgb(193, 216, 200)',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
  });

  const onOptionChangeHandler = (selectedOption) => {
    setValues({ ...values, currencies: selectedOption });
    console.log("User Selected Value - ", selectedOption);
    setSelectedOption(selectedOption);
  };

  const onOptionChangeHandler1 = (selectedOption1) => {
    setValues({ ...values, converted_currency: selectedOption1 });
    console.log("User Selected Value - ", selectedOption1);
    setSelectedOption1(selectedOption1);
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();
     console.log('2',options.currency);
    try{
      if(values.currencies!==values.converted_currency){
        if(values.converted_currency === 'US Dollar'){
          const rates=parseFloat(options[0].rates)
          const values1=parseFloat(values.value1)
          const result = rates * values1
          values.value2 = result
        }
        if(values.converted_currency === 'Chinese Yuan Renminbi'){
          const rates=options[1].rates
          const values1=parseFloat(values.value1)
          const result = rates * values1
          values.value2 = result
        }
        if(values.converted_currency === 'Canadian Dollar'){
          const rates=options[2].rates
          const values1=parseFloat(values.value1)
          const result = rates * values1
          values.value2 = result
        }
        if(values.converted_currency === 'Japanese Yen'){
          const rates=options[3].rates
          const values1=parseFloat(values.value1)
          const result = rates * values1
          values.value2 = result
        }
        if(values.converted_currency === 'Brazilian Real'){
          const rates=options[4].rates
          const values1=parseFloat(values.value1)
          const result = rates * values1
          values.value2 = result
        }
      }
    }catch(err){
      console.err('Error',err)
    }
  }

  return (
    <div className='backbody'>
       <Navbar/>
      <div className='info-container'>
          <h2>Currency Convertor</h2>
      </div>
      <form action="">
        <div className='title-head1'>
          <h2>From to </h2> 
        </div>
        <div className='tag1'>
          <div >
            <div >
            <Dropdown onSelect={onOptionChangeHandler} id='transaction_type' name='transaction_type'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedOption}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {options.map((options,index)=>{
                return <Dropdown.Item key={index} eventKey={options.currency}>{options.currency}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
            </div>
            <div style={{ marginTop: '10px' }}>
              <input placeholder='insert a value' name='value1' id='value1' onChange={handleInput}/>
            </div>
          </div>
          <div>
            <div>
            <Dropdown onSelect={onOptionChangeHandler1} id='transaction_type' name='transaction_type'>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                {selectedOption1}
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {options.map((options,index)=>{
                return <Dropdown.Item key={index} eventKey={options.currency}>{options.currency}</Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
            </div>
            <div style={{ marginTop: '10px' }}>
              <input placeholder='insert a value' name="value2" id='value2' onChange={handleInput}/>
            </div>
          </div>
        </div>
        <div style={{  display: 'flex', justifyContent: 'center', alignContent:'center' }}>
          <button className='btn btn-primary' onClick={handleSubmit} >Convert</button>
        </div>
        <div>
          <DataTable
          title="Rates"
          data={options}
          columns={columns}
          theme="solarized" 
          pagination/>
          
        </div>
      </form>
    </div>
  )
}
