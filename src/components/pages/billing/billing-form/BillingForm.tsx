import { Button } from "@components/common/atoms/button";
import { Dropdown } from "@components/common/atoms/dropdown";
import { BillingTotal } from "../billing-total";
import { BillingTrial } from "../billing-trial";
import { BillingCreditCardInput } from "./billing-credit-card-input";

const BillingForm = () => {
    return (
        <form>
            <BillingCreditCardInput />
            <div className="flex space-x-[30px] mb-[22px]">
                <Dropdown
                    items={[]}
                    label={"My Plan"}
                    placeholder="Unlimited"
                />
                <Dropdown items={[]} label={"Billing"} placeholder="Monthly" />
            </div>
            <BillingTotal />
            <BillingTrial />
            <Button fullWidth size="xl" className="mb-[70px]">
                Begin My Trial
            </Button>
        </form>
    );
};

export default BillingForm;
