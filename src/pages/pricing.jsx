// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { Link } from 'gatsby';

import { Title, Li, ChevronRight, appUrl, trackSignup } from '../layouts/utils';

const Detail = props => <small className="d-block text-light mt-1" {...props} />;
const Soon = () => <small className="badge badge-pill badge-primary fs-10 ml-1">Coming soon</small>;

const standard = [
  [1, <Trans>Cap table management</Trans>, '', true],
  [2, <Trans>Reporting</Trans>, <Trans>Recurring reports, KPIs</Trans>],
  [3, <Trans>Financing round modeling</Trans>, <Trans>1 round, 1 scenario</Trans>],
  [4, <Trans>Access rights</Trans>, <Trans>2 admins, stakeholder access</Trans>],
  [5, <Trans>Document storage</Trans>, <Trans>Up to 50 MB</Trans>],
  [6, <Trans>Holding confirmations</Trans>],
  [7, <Trans>Pooled investments</Trans>],
  [8, <Trans>Convertibles</Trans>],
  [9, <Trans>Two-factor authentication</Trans>]
];

const premium = [
  [10, <Trans>All standard features</Trans>, '', true],
  [11, <Trans>Equity plan management</Trans>, <Trans>Any vesting schedule</Trans>],
  [12, <Trans>Financing round modeling</Trans>, <Trans>Multiple rounds, 3 scenarios</Trans>],
  [13, <Trans>Access rights</Trans>, <Trans>4 admins, view-only access</Trans>],
  [14, <Trans>Document storage</Trans>, <Trans>Up to 500 MB</Trans>],
  [15, <Trans>Notifications</Trans>, <Trans>Vesting, expiry, maturity</Trans>],
  [16, <Trans>Liquidation preferences</Trans>],
  [17, <Trans>Breakpoint & exit analyses</Trans>]
];

const enterprise = [
  [18, <Trans>All Premium features</Trans>, '', true],
  [19, <Trans>Priority support</Trans>, <Trans>Phone & chat, onboarding</Trans>],
  [20, <Trans>Financing round modeling</Trans>, <Trans>Unlimited rounds & scenarios</Trans>],
  [21, <Trans>Access rights</Trans>, <Trans>Unlimited admins</Trans>],
  [22, <Trans>Document storage</Trans>, <Trans>Unlimited</Trans>],
  [
    23,
    <Trans>
      Document workflow <Soon />
    </Trans>
  ],
  [
    24,
    <Trans>
      Electronic signatures <Soon />
    </Trans>
  ]
];

const PlanFeatures = ({ features }: { features: Array<React.Element | boolean> }) => (
  <ul>
    {features.map(([i, description, detail, first]) => (
      <Li key={i}>
        {first ? <strong>{description}</strong> : description}
        {detail && <Detail>{detail}</Detail>}
      </Li>
    ))}
  </ul>
);

const PricingColumn = (props: {
  name: string,
  price: React.Element,
  plan: Array<React.Element | boolean>,
  buttonText: React.Element,
  popular?: boolean,
  detail?: React.Element,
  enterprise?: boolean
}) => (
  <div className="col-lg-4">
    <div
      className={`pricing-3 border rounded pb-4 ${
        props.popular ? 'popular border border-success shadow' : ''
      }`}
    >
      {props.popular && (
        <span className="popular-tag">
          <Trans>30-day trial</Trans>
        </span>
      )}
      <div className="d-flex flex-column justify-content-between h-100">
        <div>
          <div className="pricing-top">
            <h3>{props.name}</h3>
            <h5>{props.price}</h5>
            <Detail>{props.detail ? props.detail : <>&nbsp;</>}</Detail>
          </div>
          <ul className="text-left mt-6 mb-0">
            <PlanFeatures features={props.plan} />
          </ul>
        </div>
        <div className="text-center mb-3">
          <a
            href={props.enterprise ? 'mailto:sales@ledgy.com' : `${appUrl}/signup`}
            onClick={props.enterprise ? () => null : trackSignup}
            className={`btn btn-round btn-xl ${
              props.popular ? 'btn-primary' : 'btn-outline-primary'
            }`}
          >
            {props.buttonText}
          </a>
        </div>
      </div>
    </div>
  </div>
);
PricingColumn.defaultProps = { popular: false, detail: '', enterprise: false };

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title
      title={i18n.t`Pricing`}
      description={i18n.t`Ledgy scales with your needs. Free for startups, powerful for grown-ups.`}
    />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1>
              <Trans>Pricing</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <section className="section">
        <div className="container">
          <div className="justify-content-center row gap-y">
            <PricingColumn
              name="Standard"
              price={<Trans>Free</Trans>}
              plan={standard}
              buttonText={<Trans>Get started</Trans>}
            />
            <PricingColumn
              name="Premium"
              price={<Trans>€2</Trans>}
              plan={premium}
              buttonText={<Trans>Try 30 days free</Trans>}
              detail={<Trans>per stakeholder per month</Trans>}
              popular
            />
            <PricingColumn
              name="Enterprise"
              price={<Trans>Contact us</Trans>}
              plan={enterprise}
              buttonText={<Trans>Contact us</Trans>}
              enterprise
            />
          </div>

          <div className="text-center mt-6">
            <p className="text-muted fs-20">
              <Trans>
                A stakeholder is any holder of shares, (phantom) options, warrants, or convertibles.
                <br />
                It does not include the company treasury or incentive pools.
              </Trans>
            </p>
            <p className=" mt-6">
              <Link href to={`${props.prefix}/features/`}>
                <Trans>Discover all features</Trans>
                <ChevronRight />
              </Link>
            </p>
            <hr className="my-8" />
            <h5>
              <Trans>Does your startup tackle the climate crisis?</Trans>{' '}
              <span role="img" aria-label="earth">
                🌍
              </span>
            </h5>
            <p>
              <Trans>
                You get a <strong>20% discount</strong> on Premium if your startup helps reducing
                carbon emissions.
                <br />
                <a href="mailto:contact@ledgy.com?subject=Premium Eco-Friendly Discount Application">
                  Write us
                </a>{' '}
                about your impact to see if you qualify.
              </Trans>
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
));
