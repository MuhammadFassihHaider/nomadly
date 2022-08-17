import { GoogleButton } from "@components/common/molecules/google-button";
import { AuthTemplate } from "@components/common/templates/auth-template";
import { VerifyEmailIconContainer } from "@components/pages/verify-email/verify-email-icon-container";
import { VerifyEmailInputWithButton } from "@components/pages/verify-email/verify-email-input-with-button";

const SubHeading = (
    <p>
        Please check your inbox for a verification code <br /> to confirm your
        identity.
    </p>
);

const VerifyEmail = () => {
    return (
        <AuthTemplate
            hasSidebar={false}
            heading="Verify your email"
            subHeading={SubHeading}
        >
            <div className="mb-[156px]">
                <GoogleButton
                    brandType="gmail"
                    containerClassName="mb-[28px]"
                />
                <VerifyEmailInputWithButton />
                <VerifyEmailIconContainer />
            </div>
        </AuthTemplate>
    );
};

export default VerifyEmail;
