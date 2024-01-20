import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import { i18n } from '../../i18n-config';
import Home from './page';

/**
 * ResolvedComponent
 *
 * @param {function} Component
 * @param {*} props
 *
 * @returns {Promise<() => any>}
 */
async function resolvedComponent(Component: any, props: any): Promise<() => any> {
  const ComponentResolved = await Component(props);

  return () => ComponentResolved;
}

describe('Home', () => {
  it('renders a heading', async () => {
    const TagResolved = await resolvedComponent(Home, {
      params: { lang: i18n.defaultLocale },
    });

    render(<TagResolved />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
