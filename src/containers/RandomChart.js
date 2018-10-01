import React from 'react';
import {Line} from 'react-chartjs-2';
import request from 'superagent';


class RandomChart extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            enteredNumber:'',
        };
        this.inputNumber = this.inputNumber.bind(this);
        this.submitRequest = this.submitRequest.bind(this);
    }

    inputNumber(event){
        this.setState({enteredNumber:event.target.value});
    }

    submitRequest(){
        request.get(`https://www.random.org/integers/?num=${this.state.enteredNumber}&min=-100&max=1000&col=1&base=10&format=plain&rnd=new`).then(res =>
        {
           let x = res.text.replace(/\n/g, ",").split(',');
            x.splice(-1,1);
            this.props.submitChartRequest(x)}
        );
    }

    render() {
        const {allNumbers } = this.props;
        let dt= new Date();
        let labelsData=[];
        if(allNumbers) {
            allNumbers.map((eachDate, index) => {
                let hours = dt.getHours() - index;
                let ampm = hours >= 12 ? 'pm' : 'am';
                hours = hours % 12;
                hours = hours ? hours : 12;
                labelsData.push("[" + dt.getMonth() + "/" + dt.getDate() + ": " + hours + ampm + "]");
            });
        }
        const data= {
            labels: labelsData.reverse(),
            datasets: [{
                label: "My First dataset",
                backgroundColor: 'rgb(255, 182, 193)',
                borderColor: 'rgb(255, 22, 132)',
                data: allNumbers,
            }]
        }
        return (
            <div >
                <h2>Enter an integer</h2>
                <input type="number" min="-100" max="1000" onChange={this.inputNumber}/>
                <button onClick={this.submitRequest}>LOAD</button>
                < Line data={data} />
                <div>{undefined}</div>
            </div>
        );
    }
}
export default RandomChart;
