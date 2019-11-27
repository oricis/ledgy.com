// @flow

import React, { type Node } from 'react';
import { Trans } from '@lingui/react';

import { Accordion, AccordionItem } from '../Accordion';

const QUESTIONS = [
  {
    slug: 'why-use-these-templates',
    question: <Trans>Why use these templates?</Trans>,
    answer: (
      <Trans>
        Currently, setting up an employee participation plan costs thousands to set up. With the
        help of these templates and guides you can finalize it for a fraction of the time and cost.
      </Trans>
    )
  },
  {
    slug: 'keep-track-of-plans-and-grants',
    question: <Trans>How can I keep track of the created plan and grants?</Trans>,
    answer: (
      <Trans>
        Create a pool and add the grants directly in Ledgy. Ledgy will then keep track of the
        vesting schedule for you and send you notifications for important events (cliff, vesting,
        expiry).
      </Trans>
    )
  },
  {
    slug: 'country-laws',
    question: <Trans>Are these participation plans legal and correct in my country?</Trans>,
    answer: (
      <>
        <Trans>
          These high quality templates are made in partnership with the best and most experienced
          law firms in Europe. The templates are here to guide you through all of the steps
          necessary to set up your employee participation plan. On top of that, they serve as an
          educational tool, helping you familiarize yourself with the terminology and provisions of
          participation plans.
        </Trans>
        <br />
        <br />
        <Trans>- Our German law partners: Taylor Wessing, Baker Tilly</Trans>
        <br />
        <Trans>- Our Swiss law partners: Kellerhals Carrard, Wenger Vieli, Lexr</Trans>
      </>
    )
  }
];

export const TemplateFAQs = (): Node => {
  const accordionItems = QUESTIONS.map(({ slug, question, answer }) => (
    <AccordionItem id={slug} key={slug} title={question}>
      {answer}
    </AccordionItem>
  ));

  return (
    <div className="row-small mx-auto my-6">
      <h2 className="text-center">
        <Trans>FAQs</Trans>
      </h2>
      <Accordion>{accordionItems}</Accordion>
    </div>
  );
};
