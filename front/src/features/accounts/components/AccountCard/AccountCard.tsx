import { Account } from '../../../../types'

type AccountCardProps = React.PropsWithChildren<
  Omit<Account, 'transactions' | 'id'> & {
    className?: string
  }
>

export const AccountCard: React.FC<AccountCardProps> = ({
  title,
  amount,
  description,
  children,
  className
}) => {
  return (
    <section className={`account ${className}`}>
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>
      <div className="account-content-wrapper cta">{children}</div>
    </section>
  )
}
