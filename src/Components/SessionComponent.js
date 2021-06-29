import React, { Component } from 'react'
import axios from 'axios'



class SessionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: "",
            domain: "",
            authenticationToken: "",
            appTrayId: ""
        }
    }
    useQuery() {
        return new URLSearchParams(window.location.search);
    }

    // parseUrlParameter() {
    //     let query = this.useQuery();
    //     const domain = query.get("domain");
    //     const authToken = query.get("authToken");
    //     const apTrayId = query.get("appTrayId")
    //     this.setState({ domain: domain, authenticationToken: authToken, appTrayId: apTrayId })
    //     console.log("auth token :" + this.state.authenticationToken)
    //     console.log("Domain :" + this.state.domain)
    //     console.log("App Tray Id :" + this.state.appTrayId)
    // }

    componentDidMount() {
        //http://localhost:3000/session?accesstoken=05d60e6a-4910-48ac-ab51-49b919ebdb6f&domain=qa-newtheme.imiconnect.com&apptrayId=1
        let query = this.useQuery();
        const domain = query.get("domain");
        const authToken = query.get("accesstoken");
        const apTrayId = query.get("apptrayId")
        axios.get(`https://${domain}/connectapi/v1/verifyaccesstoken?accessToken=${authToken}&apptray_Id=${apTrayId}`)
            .then(res => {
                this.setState({ response: JSON.stringify(res.data) })
            })
            .then(err => {
                this.setState ({response : JSON.stringify(err)})
            })
    }


    render() {
        console.log("In Session Component")

        return (
            <div>
                <h1>Session Component</h1>
                <h2>{this.state.response}</h2>
            </div>
        )
    }

}

export default SessionComponent;