import React, { Component } from 'react'
import axios from 'axios'



class SessionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: "",
            clientName : "",
            tenantName : "",
            apptray_role_id : "",
            transId : ""
        }

    }
    useQuery() {
        return new URLSearchParams(window.location.search);
    }

    componentWillMount() {
        //http://localhost:3000/session?accesstoken=05d60e6a-4910-48ac-ab51-49b919ebdb6f&domain=qa-newtheme.imiconnect.com&apptrayId=1
        let query = this.useQuery();
        const domain = query.get("domain");
        const authToken = query.get("accesstoken");
        const apTrayId = query.get("apptrayId")
        axios.get(`https://${domain}/connectapi/v1/verifyaccesstoken?accessToken=${authToken}&apptray_Id=${apTrayId}`)
            .then(res => {
                const data = res.data;
                this.setState({ response: JSON.stringify(data), clientName:data.client_name,tenantName : data.tenant_name,apptray_role_id : data.apptray_role_id, transId :data.transid  })
            })
           
         }


    render() {
        console.log("In Session Component")

        return (
            <div>
                <h1>Session Component</h1>
                {/* <h2>{this.state.response}</h2> */}
                <h2>client Name : {this.state.clientName}</h2>
                <h2>Tenant Name : {this.state.tenantName}</h2>
                <h2>AppTray Role Id : {this.state.apptray_role_id}</h2>
                <h2>Trans Id : {this.state.transId} </h2>
            </div>
        )
    }

}

export default SessionComponent;