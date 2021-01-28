import React from "react";
import { Typography, Alert } from "antd";
import axios from "axios";

const { Text } = Typography;

class Stats extends React.Component {
    state={
        clientStats: null
    }

    componentWillMount(){
        this.getStats();        
    }

    getStats = async() => {
        try{
            let res = await axios.get("https://www.cloudflare.com/cdn-cgi/trace");
            let data = res.data.replace(/[\r\n]+/g, '","').replace(/\=+/g, '":"');
                data = '{"' + data.slice(0, data.lastIndexOf('","')) + '"}';
            const jsondata = JSON.parse(data);
            this.setState({ clientStats: jsondata });
        }catch(err){
            console.log(err);
        }
    }

    render(){
        return (<Alert style={{marginTop: '50px', maxWidth: '900px'}} message={<div >
                    <Text code style={{fontSize: '12px'}}>
                        <pre>{JSON.stringify(this.state.clientStats, null, 2)}</pre>                    
                    </Text>
                </div>} type="info" />
        )
    }
}

export default Stats;