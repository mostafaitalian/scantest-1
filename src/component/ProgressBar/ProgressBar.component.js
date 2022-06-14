import { PureComponent } from 'react';

import "./ProgressBar.style"

export class ProgressBar extends PureComponent{


    render(){
        const { title } = this.props
        return(
            <div block="BrogressBar">
                <div block="BrogressBar" elem="ToShipping">
                    <div block={title.includes("Shipping") || title.includes("Billing") || title.includes("Thank")?" BrogressBarAnimated":" "}>
                    </div>
                </div>
                <div block="BrogressBar" elem="Shipping">
                <div block={title.includes("Shipping") || title.includes("Billing") || title.includes("Thank")?" BrogressStage":" "}>
                1
                </div>
                    <div>Shipping</div>
                </div>
                <div block="BrogressBar" elem="ToBilling">
                <div block={title.includes("Billing") || title.includes("Thank")?" BrogressBarAnimated":" "}>
                </div>
                </div>
                <div block="BrogressBar" elem="Billing">
                <div block={title.includes("Billing") || title.includes("Thank")?" BrogressStage":" "}>
                    2
                    </div>
                    <div>Billing</div>
                </div>
                <div block="BrogressBar" elem="ToSuccess">
                <div block={title.includes("Thank")?" BrogressBarAnimated":" "}>
                </div>
                </div>

            </div>
        )
    }
}


export default ProgressBar