"use client";

import { PrimaryButton } from "@/components/shared";
import { TableHeaderButtonProps } from "@/lib/types/admin/dashboard";
import { FiPlusCircle } from "react-icons/fi";

export const TableHeaderButton: React.FC<TableHeaderButtonProps> = ({
    buttonLabel,
    buttonHref,
    buttonOnClick,
    buttonAriaLabel,
    isButtonDisabled = false,
}) => {
    return (
        <div className="flex justify-end">
            {buttonHref ? (
                <PrimaryButton
                    variant="primaryAdmin"
                    href={buttonHref}
                    aria-label={buttonAriaLabel}
                    disabled={isButtonDisabled}
                >
                    <FiPlusCircle className="mr-2 h-6 w-6 shrink-0" />
                    {buttonLabel}
                </PrimaryButton>
            ) : (
                buttonOnClick && (
                    <PrimaryButton
                        variant="primaryAdmin"
                        onClick={buttonOnClick}
                        aria-label={buttonAriaLabel}
                        disabled={isButtonDisabled}
                    >
                        <FiPlusCircle className="mr-2 h-6 w-6 shrink-0" />
                        {buttonLabel}
                    </PrimaryButton>
                )
            )}
        </div>
    );
};
