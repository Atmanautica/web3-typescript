import React from 'react';
import cn from 'classnames';

import ExternalLink from 'components/custom/externalLink';
import { Text } from 'components/custom/typography';

import s from './s.module.scss';

const WEBSITE_LINK = 'https://bityield.finance';
const DISCORD_LINK = '#';
const TWITTER_LINK = '#';
const WHITEPAPER_LINK = '#';
const GITHUB_LINK = 'https://github.com/bityield';

const LayoutFooter: React.FC = () => {
  return (
    <footer className={cn(s.footer, 'flex wrap col-gap-24 row-gap-24 justify-end')}>
      <ExternalLink href={WEBSITE_LINK}>
        <Text type="p2" weight="semibold">
          Website
        </Text>
      </ExternalLink>
      <ExternalLink href={DISCORD_LINK}>
        <Text type="p2" weight="semibold">
          Discord
        </Text>
      </ExternalLink>
      <ExternalLink href={TWITTER_LINK}>
        <Text type="p2" weight="semibold">
          Twitter
        </Text>
      </ExternalLink>
      <ExternalLink href={WHITEPAPER_LINK}>
        <Text type="p2" weight="semibold">
          Whitepaper
        </Text>
      </ExternalLink>
      <ExternalLink href={GITHUB_LINK}>
        <Text type="p2" weight="semibold">
          Github
        </Text>
      </ExternalLink>
    </footer>
  );
};

export default LayoutFooter;
