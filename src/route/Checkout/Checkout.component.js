import { PureComponent } from 'react';

import { Checkout as SourceCheckout} from 'SourceRoute/Checkout/Checkout.component'
import { ContentWrapper } from "SourceComponent/ContentWrapper/ContentWrapper.component"
import { ProgressBar } from 'Component/ProgressBar/ProgressBar.component'


export class Checkout extends SourceCheckout{
    renderProgressBar(){
        const { checkoutStep } = this.props;
        const { title = '' } = this.stepMap[checkoutStep];

        return (
            <ProgressBar title={title}/>
        );
    }
    render() {
        return (
            <main block="Checkout">
                {this.renderProgressBar()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        );
    }
}

export default Checkout;