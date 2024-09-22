import { IAccountCardProps } from "@typesrc/components/Accounts/AccountCard";

export default function AccountCard({
    account
}: IAccountCardProps) {

    return (
        <div>
            {account.name}
        </div>
    )
}