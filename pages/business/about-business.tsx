import { AuthContentCenterTemplate } from "@components/common/templates/auth-content-center-template";
import { AboutBusinessForm } from "@components/pages/about-business/about-business-form";

const Aboutbusiness = () => {
    return (
        <AuthContentCenterTemplate
            step={2}
            heading="Tell us about your business"
            subheading="You will be up and running in no time"
        >
            <AboutBusinessForm />
        </AuthContentCenterTemplate>
    );
};

export default Aboutbusiness;
